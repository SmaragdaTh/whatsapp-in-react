import StatusBar from "./StatusBar";
import Chat from "./Chat";
import "./Screen.css";

function Screen() {
  return (
    <div className="screen">
      <div className="screen-container">
        <StatusBar />
        <Chat />
      </div>
    </div>
  );
}
export default Screen;
