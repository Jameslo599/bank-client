import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    updateChatbotState(botMessage);
  };

  const handleHelpList = (topic) => {
    let botMessage;
    let botMessage2;
    switch (topic) {
      case "transferMoney":
        topic = createClientMessage("How do I transfer money?");
        botMessage = createChatBotMessage(
          "You can transfer money or set up a recurring transfer here:",
          { widget: "transferLink" }
        );
        botMessage2 = createChatBotMessage(
          "I can also help with other topics, such as:",
          { widget: "postTransfer" }
        );
        break;
      case "getAccNumber":
        topic = createClientMessage("What's my account number?");
        botMessage = createChatBotMessage(
          "You can find your account number and routing number here:",
          { widget: "accNumLink" }
        );
        botMessage2 = createChatBotMessage(
          "I can also help with other topics, such as:",
          { widget: "postNum" }
        );
        break;
      case "recentTransact":
        topic = createClientMessage("What are my recent transactions?");
        botMessage = createChatBotMessage(
          "You can view your recent transactions by clicking the link below:",
          { widget: "transactLink" }
        );
        botMessage2 = createChatBotMessage(
          "I can also help with other topics, such as:",
          { widget: "postTransact" }
        );
        break;
      case "accountSumm":
        topic = createClientMessage("Can I see my account summary?");
        botMessage = createChatBotMessage(
          "You can view your account summary by clicking the link below:",
          { widget: "summaryLink" }
        );
        botMessage2 = createChatBotMessage(
          "I can also help with other topics, such as:",
          { widget: "postSumm" }
        );
        break;
      default:
        topic = createClientMessage("Error, no topic selected!");
    }

    updateChatbotState(topic, botMessage, botMessage2);
  };

  //Add messages
  const updateChatbotState = (...message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message].flat(),
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleHelpList },
        });
      })}
    </div>
  );
};

export default ActionProvider;
