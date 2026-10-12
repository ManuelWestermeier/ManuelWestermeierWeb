/* Technologien fürs Karussell auf der Startseite – in Gruppen,
   die jeweils gemeinsam durchs Bild ziehen. */
export const techGroups = [
  {
    label: "Hardware",
    items: [
      { name: "ESP32", note: "eigenes Betriebssystem", icon: "t-chip" },
      { name: "C / C++", note: "Low-Level, Performance", icon: "t-cpp" },
      { name: "Assembly", note: "Register, CPU-Architektur", icon: "t-asm" },
      { name: "Schaltungen", note: "Elektronik, Platinen", icon: "t-pcb" },
    ],
  },
  {
    label: "Funk und Netze",
    items: [
      { name: "RF 2,4 GHz", note: "Funkmodule, eigene Protokolle", icon: "t-rf" },
      { name: "LHRP", note: "eigenes Mesh-Routing", icon: "t-mesh" },
      { name: "WebSockets", note: "eigenes Framework WSNET", icon: "t-ws" },
      { name: "WebRTC", note: "Peer-to-Peer", icon: "t-p2p" },
    ],
  },
  {
    label: "KI",
    items: [
      { name: "NVIDIA Jetson", note: "KI direkt auf dem Gerät", icon: "t-jetson" },
      { name: "YOLO", note: "Objekterkennung in Echtzeit", icon: "t-yolo" },
      { name: "Python", note: "Training, Datenverarbeitung", icon: "t-python" },
      { name: "Machine Learning", note: "Klassifizierung, Tracking", icon: "t-ml" },
    ],
  },
  {
    label: "Sicherheit und Server",
    items: [
      { name: "AES · RSA · ECC", note: "Verschlüsselung", icon: "t-key" },
      { name: "Post-Quantum", note: "zukunftssichere Signaturen", icon: "t-shield" },
      { name: "Oracle Server", note: "eigene Server in der Cloud", icon: "t-server" },
      { name: "Linux", note: "Server, Embedded, Alltag", icon: "t-term" },
    ],
  },
  {
    label: "Web und Desktop",
    items: [
      { name: "React", note: "Web-Apps", icon: "t-react" },
      { name: "TypeScript", note: "typsicheres JavaScript", icon: "t-ts" },
      { name: "Node.js", note: "APIs, Echtzeit-Backends", icon: "t-node" },
      { name: "Electron", note: "Desktop-Apps", icon: "t-electron" },
    ],
  },
  {
    label: "Werkzeuge",
    items: [
      { name: "Git", note: "alles versioniert", icon: "t-git" },
      { name: "Cloudflare", note: "Hosting, DNS", icon: "t-cloud" },
      { name: "Unity", note: "2D- und 3D-Spiele", icon: "t-cube" },
      { name: "Sounddesign", note: "Effekte, Musik", icon: "t-wave" },
    ],
  },
];
