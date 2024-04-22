import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import Loading from "../components/Loading";
import forgot from "../../images/lock.svg";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import PreLoginFooter from "../components/PreLoginFooter";
import useFormData from "../../hooks/useFormState";
import usePasswordReset from "../../hooks/usePasswordReset";

function ResetPassword() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState();
  const params = useParams();

  const { formData, handleChange } = useFormData({
    password: "",
    confirm: "",
  });
  const { isLoading, handleSubmit } = usePasswordReset(
    formData,
    `/api/reset/${params.username}`
  );

  useEffect(() => {
    const validate = () => {
      const originTime = new Date(+params.today);
      const todayTime = new Date();
      if (
        originTime.getDate() !== todayTime.getDate() &&
        originTime.getMonth() !== todayTime.getMonth() &&
        originTime.getFullYear() !== todayTime.getFullYear()
      ) {
        return setError(true);
      }
      return setStatus(true);
    };
    validate();
  });

  return (
    <div>
      {!status ? (
        <div className="loading full-screen">
          <div>
            <div className="spinner-container">
              <CircleAnim2 />
            </div>
            <h1>Please Wait...</h1>
            {error && (
              <div className="loading-text">
                <span>
                  Your link has expired, please send a new password reset
                  request.
                </span>
                <button>
                  <Link to="/forgot">OK</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="login forgot">
          <MyHeaderView logoEnd="/" />
          <div className="section-container">
            <section className="not-found">
              <div className="message-box message">
                <div>
                  <img src={forgot} alt="404 traffic cone"></img>
                </div>
                <h1>Reset your password</h1>
                <p>
                  This page will only be available for a short period of time.{" "}
                  <br />
                  Please update your password as soon as possible.
                </p>
              </div>
            </section>
            <section className="login find-me">
              <div className="message-box">
                <form onSubmit={handleSubmit}>
                  <div className="form-text">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-text">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm"
                      id="confirm"
                      value={formData.confirm}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="login-button">
                    {isLoading && <Loading />}
                    <button type="submit">Change Password</button>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <PreLoginFooter />
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
