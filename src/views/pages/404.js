import { Link } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import HeaderSupport from "../components/HeaderSupport";
import cone from "../../images/404.png";

function NotFound() {
  return (
    <div className="not-found">
      <MyHeaderView
        logoEnd={"/"}
        headerSupport={<HeaderSupport helpButton={""} signText={"Sign In"} />}
      />
      <section className="not-found">
        <div className="message-box">
          <div>
            <img src={cone} alt="404 traffic cone"></img>
          </div>
          <h1>We can't find the page you're trying to reach.</h1>
          <p>The link you are using may be outdated or misspelled.</p>
          <button>
            <Link to="/">OK</Link>
          </button>
        </div>
      </section>
      <MyFooterView />
    </div>
  );
}

export default NotFound;
