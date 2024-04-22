import React from "react";
import Link from "../../../images/icons/link";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li
      key={link.id}
      className="chat-link-item react-chatbot-kit-chat-bot-message"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="chat-link-item-url"
      >
        {link.text}
        <Link />
      </a>
    </li>
  ));

  return <ul className="chat-link">{linkMarkup}</ul>;
};

export default LinkList;
