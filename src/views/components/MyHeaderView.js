import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import ArrowLeft from "../../images/icons/arrow-left";
import LeftArrow from "../../images/icons/left-arrow";

function MyHeaderView({ logoEnd, headerSupport, backArrow = false }) {
  const [isMobile, setIsMobile] = useState();
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(logoEnd);
  };

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          {backArrow ? (
            isMobile ? (
              <div className="nav-arrow" onClick={() => window.history.back()}>
                <ArrowLeft />
              </div>
            ) : (
              <button
                className="back-button"
                onClick={() => window.history.back()}
              >
                <LeftArrow />
                Back
              </button>
            )
          ) : null}
          <div>
            <Link onClick={refreshPage}>
              <img className="logo" alt="capital one logo" src={logo}></img>
            </Link>
          </div>
          {headerSupport}
        </nav>
      </header>
    </div>
  );
}

export default MyHeaderView;
