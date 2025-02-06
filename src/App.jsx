import { useState, useEffect } from "react";
import Conversation from "./components/Conversation";
import getTheTime from "./utils/getTheTime";

export default function App() {
  const [deviceTime, setDeviceTime] = useState("");

  useEffect(() => {
    console.log("App() useEffect");

    /* Device Time */
    setDeviceTime(getTheTime());
    const timer = setInterval(() => {
      setDeviceTime(getTheTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="page">
        <div className="marvel-device nexus5">
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="volume"></div>
          <div className="camera"></div>
          <div className="screen">
            <div className="screen-container">
              <div className="status-bar">
                <div className="time">{deviceTime}</div>
                <div className="battery">
                  <i className="zmdi zmdi-battery"></i>
                </div>
                <div className="network">
                  <i className="zmdi zmdi-network"></i>
                </div>
                <div className="wifi">
                  <i className="zmdi zmdi-wifi-alt-2"></i>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star"></i>
                </div>
              </div>
              <div className="chat">
                <div className="chat-container">
                  <div className="user-bar">
                    <div className="back">
                      <i className="zmdi zmdi-arrow-left"></i>
                    </div>
                    <div className="avatar">
                      <img
                        src="https://avatars2.githubusercontent.com/u/398893?s=128"
                        alt="Avatar"
                      />
                    </div>
                    <div className="name">
                      <span>Zeno Rocha</span>
                      <span className="status">online</span>
                    </div>
                    <div className="actions more">
                      <i className="zmdi zmdi-more-vert"></i>
                    </div>
                    <div className="actions attachment">
                      <i className="zmdi zmdi-attachment-alt"></i>
                    </div>
                    <div className="actions">
                      <i className="zmdi zmdi-phone"></i>
                    </div>
                  </div>
                  <Conversation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
