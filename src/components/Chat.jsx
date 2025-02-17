import Conversation from "./Conversation";
import UserBar from "./UserBar";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <UserBar />
        <Conversation />
      </div>
    </div>
  );
}
export default Chat;
