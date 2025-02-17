import { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import SvgSmiley from "../ui/SvgSmiley";

function Form(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredValue("");
    props.onSubmit(enteredValue);
  };

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return (
    <form className="conversation-compose" onSubmit={submitHandler}>
      <div className="emoji">
        <SvgSmiley />
      </div>
      <input
        className="input-msg"
        name="input"
        placeholder="Type a message"
        autoComplete="off"
        autoFocus
        value={enteredValue}
        onChange={inputChangeHandler}
      ></input>
      <div className="photo">
        <i className="zmdi zmdi-camera"></i>
      </div>
      <button className="send">
        <div className="circle">
          <i className="zmdi zmdi-mail-send"></i>
        </div>
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
