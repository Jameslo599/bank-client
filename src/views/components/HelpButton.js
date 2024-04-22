import React, { useState } from "react";
import Comments from "../../images/icons/comments";
import Modal from "./Modal";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function HelpButton() {
  const [open, setOpen] = useState();

  const onClose = () => {
    setOpen(false);
  };

  const validateInput = () => {
    const input = document.querySelector(".react-chatbot-kit-chat-input");
    if (input.value === "") return false;
    return true;
  };

  return (
    <div className="help-button">
      <button onClick={() => setOpen(true)}>
        <Comments />
        <span className="supp-text">Need Help?</span>
      </button>
      <Modal open={open} onClose={onClose}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Type your message here"
          validator={validateInput}
        />
      </Modal>
    </div>
  );
}

export default HelpButton;
