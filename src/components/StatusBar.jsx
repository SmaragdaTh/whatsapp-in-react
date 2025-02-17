import { useState, useEffect } from "react";
import getTheTime from "../utils/getTheTime";
import "./StatusBar.css";

function StatusBar() {
  const [deviceTime, setDeviceTime] = useState("");

  useEffect(function setDeviceTimeFunc() {
    setDeviceTime(getTheTime());
    const timer = setInterval(() => {
      setDeviceTime(getTheTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
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
  );
}
export default StatusBar;
