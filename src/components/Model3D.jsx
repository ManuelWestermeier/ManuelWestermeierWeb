import React, { useEffect, useRef, useState } from "react";
import { isLite, observeVisible, reducedMotion } from "../lib/hooks";

/* Interaktives 3D-Modell. Zuerst nur ein vorgerendertes Bild; three.js wird
   erst auf Tippen geladen; gerendert wird nur bei Bewegung (Drehung, Ziehen), auf
   Lite-Geräten mit DPR 1 und ohne Schatten. */
export default function Model3D({ src, title, poster }) {
  const box = useRef(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let dispose = () => {};
    let started = false;

    const start = async () => {
      started = true;
      setState("loading");
      const [THREE, { GLTFLoader }, { OrbitControls }, { RoomEnvironment }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("three/examples/jsm/controls/OrbitControls.js"),
        import("three/examples/jsm/environments/RoomEnvironment.js"),
      ]);
      const lite = isLite();
      const renderer = new THREE.WebGLRenderer({ antialias: !lite, alpha: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lite ? 1 : 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(2.6, 1.5, 2.6);

      /* Weiches Studiolicht als Umgebung: saubere Spiegelungen auf dem Rumpf */
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.55;
      scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x101014, 0.6));
      const key = new THREE.DirectionalLight(0xffffff, 2.6);
      key.position.set(3, 4, 2);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xc9d6ff, 0.9);
      rim.position.set(-3, 1.5, -3);
      scene.add(rim);

      /* Bodenschatten als weicher Verlauf – billiger als Echtzeitschatten */
      const g = document.createElement("canvas");
      g.width = g.height = 128;
      const c = g.getContext("2d");
      const grad = c.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, "rgba(0,0,0,0.55)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = grad;
      c.fillRect(0, 0, 128, 128);
      const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(g), transparent: true, depthWrite: false }));
      shadow.rotation.x = -Math.PI / 2;
      scene.add(shadow);

      const gltf = await new GLTFLoader().loadAsync(src);
      const model = gltf.scene;
      model.traverse((o) => {
        if (!o.isMesh) return;
        if (!o.geometry.attributes.normal) o.geometry.computeVertexNormals();
        const orange = /orange/i.test(o.name) || /orange/i.test(o.material.name);
        o.material = new THREE.MeshStandardMaterial({
          color: orange ? 0xf0501a : 0x2f3338,
          roughness: orange ? 0.38 : 0.55,
          metalness: orange ? 0.0 : 0.2,
        });
      });
      const b = new THREE.Box3().setFromObject(model);
      model.position.y -= b.min.y;
      shadow.position.y = 0.002;
      scene.add(model);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, (b.max.y - b.min.y) / 2, 0);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.minDistance = 1.8;
      controls.maxDistance = 6;
      controls.maxPolarAngle = Math.PI * 0.49;
      controls.autoRotate = !reducedMotion();
      controls.autoRotateSpeed = 1.2;

      const size = () => {
        const w = el.clientWidth, h = el.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(el);

      let raf = 0, visible = true, until = 0;
      const loop = () => {
        raf = 0;
        if (!visible) return;
        controls.update();
        renderer.render(scene, camera);
        /* weiterlaufen, solange gedreht wird oder die Dämpfung ausläuft */
        if (controls.autoRotate || performance.now() < until) raf = requestAnimationFrame(loop);
      };
      const kick = () => {
        until = performance.now() + 1200;
        if (!raf) raf = requestAnimationFrame(loop);
      };
      controls.addEventListener("start", () => {
        controls.autoRotate = false;
        kick();
      });
      controls.addEventListener("change", kick);
      const unvis = observeVisible(el, (v) => {
        visible = v;
        if (v) kick();
      });
      kick();
      setState("ready");

      /* Für Renderings von außen: window.__twrView(azimut, höhe) */
      el.__view = (az, el2 = 0.35, dist = 3.3) => {
        controls.autoRotate = false;
        camera.position.set(Math.sin(az) * dist * Math.cos(el2), controls.target.y + Math.sin(el2) * dist, Math.cos(az) * dist * Math.cos(el2));
        controls.update();
        renderer.render(scene, camera);
      };

      dispose = () => {
        cancelAnimationFrame(raf);
        unvis();
        ro.disconnect();
        controls.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    el.__start = () => !started && start().catch(() => setState("error"));
    return () => dispose();
  }, [src]);

  return (
    <div className="m3d" ref={box} role="img" aria-label={`${title}: 3D-Modell, zum Drehen ziehen`}>
      {state !== "ready" && poster && <img className="m3d__poster" src={poster} alt="" decoding="async" draggable="false" />}
      {state === "idle" && (
        <button type="button" className="m3d__go" onClick={() => box.current.__start()}>
          In 3D drehen
        </button>
      )}
      {state === "loading" && <span className="m3d__state meta">3D-Modell lädt …</span>}
      {state === "error" && <span className="m3d__state meta">3D-Modell nicht verfügbar</span>}
      {state === "ready" && <span className="m3d__hint meta">Ziehen zum Drehen</span>}
    </div>
  );
}
