/* Technologien fürs Karussell auf der Startseite – in Gruppen,
   die jeweils gemeinsam durchs Bild ziehen. Jede verlinkt auf ihre Referenz. */
export const techGroups = [
  {
    label: "Hardware",
    items: [
      { name: "ESP32", note: "eigenes Betriebssystem", icon: "t-chip", href: "https://www.espressif.com/en/products/socs/esp32" },
      { name: "C / C++", note: "Low-Level, Performance", icon: "t-cpp", href: "https://en.cppreference.com/" },
      { name: "Assembly", note: "Register, CPU-Architektur", icon: "t-asm", href: "https://de.wikipedia.org/wiki/Assemblersprache" },
      { name: "Schaltungen", note: "Elektronik, Platinen", icon: "t-pcb", href: "https://de.wikipedia.org/wiki/Elektronische_Schaltung" },
    ],
  },
  {
    label: "Funk",
    items: [
      { name: "RF 2,4 GHz", note: "Funkmodule, eigene Protokolle", icon: "t-rf", href: "https://de.wikipedia.org/wiki/ISM-Band" },
      { name: "433 MHz", note: "weite Reichweite, wenig Energie", icon: "t-rf", href: "https://de.wikipedia.org/wiki/LPD433" },
      { name: "Bluetooth", note: "BLE, Geräte koppeln", icon: "t-bt", href: "https://www.bluetooth.com/" },
      { name: "NFC", note: "Nahfeld, Tags lesen und schreiben", icon: "t-nfc", href: "https://nfc-forum.org/" },
    ],
  },
  {
    label: "Netze",
    items: [
      { name: "LHRP", note: "eigenes Mesh-Routing", icon: "t-mesh", href: "https://github.com/ManuelWestermeier/LHRP" },
      { name: "WebSockets", note: "eigenes Framework WSNET", icon: "t-ws", href: "https://github.com/ManuelWestermeier/WSNET_Framework" },
      { name: "WebRTC", note: "Peer-to-Peer", icon: "t-p2p", href: "https://webrtc.org/" },
    ],
  },
  {
    label: "KI",
    items: [
      { name: "NVIDIA Jetson", note: "KI direkt auf dem Gerät", icon: "t-jetson", href: "https://developer.nvidia.com/embedded/jetson-orin" },
      { name: "YOLO", note: "Objekterkennung in Echtzeit", icon: "t-yolo", href: "https://docs.ultralytics.com/" },
      { name: "Python", note: "Training, Datenverarbeitung", icon: "t-python", href: "https://www.python.org/" },
      { name: "Machine Learning", note: "Klassifizierung, Tracking", icon: "t-ml", href: "https://de.wikipedia.org/wiki/Maschinelles_Lernen" },
    ],
  },
  {
    label: "Sicherheit und Server",
    items: [
      { name: "AES · RSA · ECC", note: "Verschlüsselung", icon: "t-key", href: "https://de.wikipedia.org/wiki/Advanced_Encryption_Standard" },
      { name: "Post-Quantum", note: "zukunftssichere Signaturen", icon: "t-shield", href: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
      { name: "Oracle Server", note: "eigene Server in der Cloud", icon: "t-server", href: "https://www.oracle.com/cloud/" },
      { name: "Linux", note: "Server, Embedded, eigenes OS", icon: "t-term", href: "https://www.kernel.org/" },
    ],
  },
  {
    label: "Web und Desktop",
    items: [
      { name: "React", note: "Web-Apps", icon: "t-react", href: "https://react.dev/" },
      { name: "TypeScript", note: "typsicheres JavaScript", icon: "t-ts", href: "https://www.typescriptlang.org/" },
      { name: "Node.js", note: "APIs, Echtzeit-Backends", icon: "t-node", href: "https://nodejs.org/" },
      { name: "Electron", note: "Desktop-Apps, HectoBase OS", icon: "t-electron", href: "https://www.electronjs.org/" },
    ],
  },
  {
    label: "Werkzeuge",
    items: [
      { name: "Git", note: "alles versioniert", icon: "t-git", href: "https://git-scm.com/" },
      { name: "Cloudflare", note: "Hosting, DNS", icon: "t-cloud", href: "https://www.cloudflare.com/" },
      { name: "Unity", note: "2D- und 3D-Spiele", icon: "t-cube", href: "https://unity.com/" },
      { name: "Sounddesign", note: "Effekte, Musik", icon: "t-wave", href: "https://de.wikipedia.org/wiki/Sounddesign" },
    ],
  },
];
