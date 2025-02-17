import { useState, useEffect, useRef } from "react";
import Form from "./Form";
import getTheTime from "../utils/getTheTime";
import memes from "./Memes";
import { initialMessages, id } from "./InitialMessages";
import Message from "./Message";
import "./Conversation.css";

let idNew = id;

function Conversation() {
  const [messages, setMessages] = useState(initialMessages);

  const [lastAddedIndex, setLastAddedIndex] = useState(null);

  const conversationRef = useRef(null);

  useEffect(
    function getRandomLastMessage() {
      if (messages.length > 3) {
        return;
      }

      let randomMessage = memes[Math.floor(Math.random() * memes.length)];

      let obj = {
        msg: randomMessage,
        time: getTheTime(),
        id: ++idNew,
      };

      setMessages([...messages, obj]);

      return () => {};
    },
    [messages]
  );

  useEffect(
    function animateTick() {
      if (lastAddedIndex !== null) {
        const timer = setTimeout(() => {
          setLastAddedIndex(null);
        }, 1000);

        return () => {
          clearTimeout(timer);
        };
      }
    },
    [lastAddedIndex]
  );

  useEffect(
    function scrollToLastMsg() {
      if (conversationRef.current) {
        conversationRef.current.scrollTop =
          conversationRef.current.scrollHeight;
      }
    },
    [messages]
  );

  const submitHandler = (enteredValue) => {
    const obj = {
      msg: enteredValue,
      time: getTheTime(),
      id: ++idNew,
    };

    setMessages([...messages, obj]);

    setLastAddedIndex(messages.length);
  };

  return (
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
            <Message
              classAttr={`message ${classMessage}`}
              key={item.id}
              msg={item.msg}
              time={item.time}
              tickSeen={index === lastAddedIndex ? false : true}
            />
          );
        })}
      </div>

      <Form onSubmit={submitHandler} />
    </div>
  );
}

export default Conversation;
