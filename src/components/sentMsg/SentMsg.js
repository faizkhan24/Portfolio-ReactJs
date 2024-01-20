import React from "react";
import "./sentMsg.css";
import { tick } from "../../utils/images";
const SentMsg = () => {
  return (
    <>
      <div className="email-sent-msg">
        <img src={tick} width="20px" alt="" />
        <span>Mail successfully sent</span>
      </div>
    </>
  );
};

export default SentMsg;
