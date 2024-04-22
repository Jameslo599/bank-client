import { createChatBotMessage } from "react-chatbot-kit";
import { format } from "date-fns";
import AccountOptions from "./AccountOptions";
import LinkList from "./LinkList";

const botName = "Eno";
const date = format(new Date(), "MMM d, y 'at' p");

const config = {
  initialMessages: [
    createChatBotMessage(`Hi there!`),
    createChatBotMessage(
      `I'm ${botName}, your Capital One assistant. I'm not a human, so I'm available 24/7. Ask me a question, or try one of these:`,
      { withAvatar: true, widget: "accountOptions" }
    ),
  ],
  botName: botName,
  customComponents: {
    header: () => <div className="react-chatbot-kit-chat-header">{date}</div>,
  },
  widgets: [
    {
      widgetName: "accountOptions",
      widgetFunc: (props) => <AccountOptions {...props} />,
    },
    {
      widgetName: "transferLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Transfer money",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "postTransfer",
      widgetFunc: (props) => <AccountOptions {...props} />,
      props: {
        keyword: "transfer",
      },
    },
    {
      widgetName: "accNumLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Account info",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "postNum",
      widgetFunc: (props) => <AccountOptions {...props} />,
      props: {
        keyword: "number",
      },
    },
    {
      widgetName: "summaryLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Account summary",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "postSumm",
      widgetFunc: (props) => <AccountOptions {...props} />,
      props: {
        keyword: "summary",
      },
    },
    {
      widgetName: "transactLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Recent transactions",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "postTransact",
      widgetFunc: (props) => <AccountOptions {...props} />,
      props: {
        keyword: "transactions",
      },
    },
  ],
};

export default config;
