import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../components/HeaderSupport";
import HelpButton from "../components/HelpButton";
import useSignOut from "../../hooks/useSignOut";
import Pen from "../../images/icons/pen";
import UpdateModal from "../components/UpdateModal";
import UpdateUsername from "../components/UpdateUsername";
import UpdatePassword from "../components/UpdatePassword";

function Security() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { handleClick } = useSignOut();

  const [open, setOpen] = useState(null);
  const onClose = () => {
    const elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
      if (
        elements[i].type === "text" ||
        elements[i].type === "tel" ||
        elements[i].type === "email"
      ) {
        elements[i].value = "";
      }
    }
    setOpen(false);
  };

  const personalize = useCallback(async () => {
    try {
      const response = await fetch(`/api/user`);
      const data = await response.json();
      if (!data) return navigate("/");
      setBackendData(data);
      setOpen(false);
    } catch (e) {
      setError(e);
    }
  }, [navigate]);
  useEffect(() => {
    personalize();
  }, [navigate, personalize]);

  return (
    <div>
      {!backendData ? (
        <div className="loading full-screen">
          <div>
            <div className="spinner-container">
              <CircleAnim2 />
            </div>
            <h1>Please Wait...</h1>
            {error && (
              <span>An error has occurred! Please refresh and try again.</span>
            )}
          </div>
        </div>
      ) : (
        <div className="App">
          <MyHeaderView
            headerSupport={
              <HeaderSupport
                helpButton={<HelpButton />}
                signText={""}
                link={""}
                signOut={handleClick}
              />
            }
            logoEnd={"/"}
            backArrow={true}
          />
          <section className="profile security">
            <div className="profile-banner">
              <h1>Security</h1>
            </div>
            <div className="profile-address security-details">
              <h2>Sign In</h2>
              <div>
                <div className="security-login-container">
                  <div className="security-login">
                    <div>
                      <span>Username</span>
                    </div>
                    <span>* * * * * *</span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(1);
                    }}
                  >
                    <Pen />
                  </button>
                </div>
                <div className="security-login-container">
                  <div className="security-login">
                    <div>
                      <span>Password</span>
                    </div>
                    <span>* * * * * *</span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(2);
                    }}
                  >
                    <Pen />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <UpdateModal
            open={open === 1}
            onClose={onClose}
            children={<UpdateUsername personalize={personalize} />}
            title={"Change Username"}
            subtitle={"Replace your old username with a new one."}
            subject={"username"}
          ></UpdateModal>
          <UpdateModal
            open={open === 2}
            onClose={onClose}
            children={<UpdatePassword personalize={personalize} />}
            subtitle={"Replace your old password with a new one."}
            title={"Change Password"}
            subject={"password"}
          ></UpdateModal>
          <MyFooterView />
        </div>
      )}
    </div>
  );
}

export default Security;
