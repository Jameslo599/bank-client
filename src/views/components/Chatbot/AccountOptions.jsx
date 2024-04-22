import React from "react";

const AccountOptions = (props) => {
  const keyword = props.keyword || null;
  let options = [
    {
      text: "How do I transfer money?",
      handler: () => {
        props.actionProvider.handleHelpList("transferMoney");
      },
      id: 1,
    },
    {
      text: "What's my account number?",
      handler: () => {
        props.actionProvider.handleHelpList("getAccNumber");
      },
      id: 2,
    },
    {
      text: "What are my recent transactions?",
      handler: () => {
        props.actionProvider.handleHelpList("recentTransact");
      },
      id: 3,
    },
    {
      text: "Can I see my account summary?",
      handler: () => {
        props.actionProvider.handleHelpList("accountSumm");
      },
      id: 4,
    },
  ];

  if (keyword !== null) {
    options = options.filter((option) => {
      return !option.text.includes(keyword);
    });
  }

  const optionsMarkup = options.map((option) => (
    <div className="option-button-container">
      <button
        className="react-chatbot-kit-chat-bot-message chat-button"
        key={option.id}
        onClick={option.handler}
        type="button"
      >
        {option.text}
      </button>
    </div>
  ));

  return <>{optionsMarkup}</>;
};

export default AccountOptions;
