import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import getTheTime from "../utils/getTheTime";

function Tick(props) {
  return (
    <>
      <span className={`tick ${props.seen ? "" : "tick-animation"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          id="msg-dblcheck"
          x="2047"
          y="2061"
        >
          <path
            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            fill="#92a58c"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          id="msg-dblcheck-ack"
          x="2063"
          y="2076"
        >
          <path
            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            fill="#4fc3f7"
          />
        </svg>
      </span>
    </>
  );
}

Tick.propTypes = {
  seen: PropTypes.bool,
};

function Conversation() {
  console.log("Conversation()");

  var memes = [
    'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
    'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
    'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
    "Dude, you congratulated a potato for getting a part in Toy Story",
    'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
    'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
  ];

  var initialMessages = [
    { msg: "What happened last night?", time: getTheTime() },
    { msg: "You were drunk.", time: getTheTime() },
    { msg: "No I wasn't.", time: getTheTime() },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const [lastAddedIndex, setLastAddedIndex] = useState(null);

  const conversationRef = useRef(null);

  useEffect(() => {
    console.log("Conversation() useEffect");
    /* Random Last Message */
    let randomMessage = memes[Math.floor(Math.random() * memes.length)];
    const obj = {
      msg: randomMessage,
      time: getTheTime(),
    };

    setMessages([...messages, obj]);

    return () => {};
  }, []);

  useEffect(() => {
    console.log("Conversation() useEffect 2");
    /* Tick Animation After Submission */
    if (lastAddedIndex !== null) {
      const timer = setTimeout(() => {
        setLastAddedIndex(null);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [lastAddedIndex]);

  useEffect(() => {
    console.log("Conversation() useEffect 3");

    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  const submitHandler = (enteredValue) => {
    console.log("Conversation()", enteredValue);

    const obj = {
      msg: enteredValue,
      time: getTheTime(),
    };

    setMessages([...messages, obj]);

    setLastAddedIndex(messages.length);
  };

  return (
    <>
      <div className="conversation">
        <div className="conversation-container" ref={conversationRef}>
          {messages.map((item, index) => {
            let classMessage = "sent";
            if (index <= 3) {
              if (index % 2 == 0) {
                classMessage = "sent";
              } else {
                classMessage = "received";
              }
            }

            return (
              <div className={`message ${classMessage}`} key={index}>
                {item.msg}
                <span className="metadata">
                  <span className="time">{item.time}</span>
                  <Tick seen={index === lastAddedIndex ? false : true} />
                </span>
              </div>
            );
          })}
        </div>

        <Form onSubmit={submitHandler} />
      </div>
    </>
  );
}

export default Conversation;
