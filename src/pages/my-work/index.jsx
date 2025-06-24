import React, { useEffect } from "react";
import BlurText from "../../comp/react-bits/blur-text";

function MyWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex home bg-image col">
      <h1 style={{ fontSize: "2rem" }}>
        <BlurText
          text="Meine Arbeit"
          delay={70}
          animateBy="chars"
          direction="top"
        />
      </h1>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://www.electronjs.org">
                <img
                  style={{ height: "2rem" }}
                  src="https://www.electronjs.org/assets/img/logo.svg"
                  alt="[electron logo]"
                />
              </a>
            </td>
            <td>Desktop Applikationen mit Electron (JS)</td>
          </tr>
          <tr>
            <td>
              <a href="https://react.dev">
                <img
                  style={{ height: "2rem", borderRadius: "2rem" }}
                  src="https://th.bing.com/th?id=ODLS.adb8ba17-4f9a-4488-87b4-615dae577f6d&w=64&h=64&qlt=90&pcl=fffffa&o=6&pid=1.2"
                  alt="[react logo]"
                />
              </a>
            </td>
            <td>
              Webapps und Homepages im Frontend mit Vite und React (JSX, JS)
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://nodejs.org">
                <img
                  style={{ height: "2rem", borderRadius: "2rem" }}
                  src="https://th.bing.com/th/id/OIP.eld6_TNR8oUOuXCAojj1CQHaDt?rs=1&pid=ImgDetMain"
                  alt="[node js logo]"
                />
              </a>
            </td>
            <td>
              Webapps und Homepages im Backend mit NPM, Express und
              <a
                style={{ margin: "0 5px" }}
                href="https://github.com/ManuelWestermeier/WSNET_Framework/"
                title="eigene Websocket (Libary/Protokol)"
              >
                WSNET
              </a>
              (NodeJS)
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://visualstudio.microsoft.com">
                <img
                  style={{
                    height: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "2rem",
                  }}
                  src="https://th.bing.com/th/id/OIP.0PhBmwxhEiX3BRBwrlnPFwAAAA?rs=1&pid=ImgDetMain"
                  alt="[Visual Studio logo]"
                />
              </a>
            </td>
            <td>
              Consolen und GUI Apps mit Visual Studio (C#, C++,
              <a
                style={{ marginLeft: "5px" }}
                href="https://github.com/ManuelWestermeier/at-script"
                title="eigene sprache"
              >
                @-script
              </a>
              )
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://unity.com">
                <img
                  style={{
                    height: "2rem",
                    backgroundColor: "white",
                    borderRadius: "2rem",
                    width: "3rem",
                  }}
                  src="https://cdn.sanity.io/images/fuvbjjlp/production/59311eb2aa91009ac2a4eac41a6b4ae0e26ccda2-22x24.svg"
                  alt="[unity logo]"
                />
              </a>
            </td>
            <td>Crossplatform Videospiele mit Unity (C#)</td>
          </tr>
          <tr>
            <td>
              <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/">
                <img
                  style={{
                    height: "2rem",
                    backgroundColor: "white",
                    borderRadius: "2rem",
                    width: "3rem",
                  }}
                  src="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/_static/espressif-logo.svg"
                  alt="[platform io logo]"
                />
              </a>
            </td>
            <td>Embeddes Systems ESP32/Arduino (C/C++/PlatformIO/ArduinoIDE)</td>
          </tr>
          <tr>
            <td>
              <a href="https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/value-server-512.png">
                <img
                  style={{
                    height: "2rem",
                    backgroundColor: "white",
                    borderRadius: "2rem",
                    width: "3rem",
                  }}
                  src="https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/value-server-512.png"
                  alt="[unity logo]"
                />
              </a>
            </td>
            <td>
              Serverhosting mit <a href="https://codesandbox.io">Codesandbox</a>
              , Github Pages, render.com und{" "}
              <a href="https://www.netlify.com">Netlify</a>
            </td>
          </tr>
        </tbody>
      </table>
      <BlurText
        text="In diesem Zusammenhang möchte ich betonen, dass ich mir neue Technologien rasch und problemlos aneignen kann."
        delay={150}
        animateBy="words"
        direction="top"
      />
    </section>
  );
}

export default MyWork;
