import getTheTime from "../utils/getTheTime";

const currentTime = getTheTime();
let id = 0;

const initialMessages = [
  { msg: "What happened last night?", time: currentTime, id: ++id },
  { msg: "You were drunk.", time: currentTime, id: ++id },
  { msg: "No I wasn't.", time: currentTime, id: ++id },
];

export { initialMessages, id };
