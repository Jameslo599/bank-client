// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import MyHeaderView from "../components/MyHeaderView";
import HeaderSupport from "../components/HeaderSupport";
import Loading from "../components/Loading";
import forgot from "../../images/forgot.png";
import PreLoginFooter from "../components/PreLoginFooter";
import useFormData from "../../hooks/useFormState";
import useFormSubmit from "../../hooks/useFormSubmit";

function Forgot() {
  const { formData, handleChange } = useFormData({
    email: "",
    lname: "",
    dob: "",
  });
  const { isLoading, handleSubmit } = useFormSubmit(formData, "/api/forgot");

  return (
    <div className="login forgot">
      {/* <ToastContainer /> */}
      <MyHeaderView
        logoEnd="/"
        headerSupport={<HeaderSupport helpButton={""} signText={"Sign In"} />}
      />
      <div className="section-container">
        <section className="not-found">
          <div className="message-box message">
            <div>
              <img src={forgot} alt="404 traffic cone"></img>
            </div>
            <h1>First, let's find your username</h1>
            <p>
              This information will help us locate your Capital One online
              account(s). If needed, you can update your password after account
              lookup.
            </p>
          </div>
        </section>
        <section className="login find-me">
          <div className="message-box">
            <form onSubmit={handleSubmit}>
              <div className="form-text">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  max="9999-12-31"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="login-button">
                {isLoading && <Loading />}
                <button type="submit">Find Me</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <PreLoginFooter />
    </div>
  );
}

export default Forgot;
