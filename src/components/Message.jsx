import PropTypes from "prop-types";
import Tick from "./Tick";
import "./Message.css";

function Message(props) {
  return (
    <div className={props.classAttr}>
      {props.msg}
      <span className="metadata">
        <span className="time">{props.time}</span>
        <Tick seen={props.tickSeen} />
      </span>
    </div>
  );
}

Message.propTypes = {
  classAttr: PropTypes.string,
  msg: PropTypes.string,
  time: PropTypes.string,
  tickSeen: PropTypes.bool,
};

export default Message;
