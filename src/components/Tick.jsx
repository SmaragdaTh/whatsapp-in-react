import PropTypes from "prop-types";
import SvgTick from "../ui/SvgTick";

function Tick(props) {
  return (
    <span className={`tick ${props.seen ? "" : "tick-animation"}`}>
      <SvgTick fill="#92a58c" id="msg-dblcheck" />
      <SvgTick fill="#4fc3f7" id="msg-dblcheck-ack" />
    </span>
  );
}

Tick.propTypes = {
  seen: PropTypes.bool,
};

export default Tick;
