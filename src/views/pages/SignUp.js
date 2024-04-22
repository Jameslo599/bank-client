// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import HeaderSupport from "../components/HeaderSupport";
import Loading from "../components/Loading";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import useFormData from "../../hooks/useFormState";
import useSignUp from "../../hooks/useSignUp";
import State from "../../images/icons/select-state";

function SignUp() {
  const { formData, handleChange, onlyNumbers } = useFormData({
    userName: "",
    password: "",
    email: "",
    fname: "",
    lname: "",
    dob: "",
    balance: "",
    mobile: "",
  });
  const { addressData, handleAddress } = useFormData(null, {
    street_address: "",
    apartment_suite: "",
    city: "",
    state: "",
    zip: "",
  });

  const { isLoading, handleSubmit } = useSignUp(
    [formData, addressData],
    "/api/create"
  );

  return (
    <div className="login forgot create">
      {/* <ToastContainer /> */}
      <MyHeaderView
        logoEnd={"/"}
        headerSupport={<HeaderSupport helpButton={""} signText={"Sign In"} />}
      />
      <div className="section-container signup">
        <section className="login find-me">
          <div className="message-box">
            <div>
              <img src={logo} alt="capital one logo"></img>
            </div>
            <h1>Open a 360 Checking Account</h1>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-text">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="password">Password</label>
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.fname}
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
              <div className="form-text">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(XXX) XXX-XXXX"
                  maxLength={10}
                  minLength={10}
                  name="mobile"
                  onChange={handleChange}
                  onKeyDown={onlyNumbers}
                  value={formData.mobile}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  id="street"
                  maxLength={38}
                  name="street_address"
                  onChange={handleAddress}
                  value={addressData.street_address}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="apartment">Apartment or Suite (optional)</label>
                <input
                  type="text"
                  id="apartment"
                  name="apartment_suite"
                  value={addressData.apartment_suite}
                  onChange={handleAddress}
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleAddress}
                  value={addressData.city}
                  required
                ></input>
              </div>
              <div>
                <div className="form-text">
                  <label htmlFor="state">State</label>
                  <State
                    handleChange={handleAddress}
                    name={"state"}
                    value={addressData.state}
                  />
                </div>
                <div className="form-text">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    className="update-residential__input"
                    type="text"
                    id="zip"
                    maxLength={10}
                    name="zip"
                    onChange={handleAddress}
                    onKeyDown={onlyNumbers}
                    value={addressData.zip}
                    required
                  ></input>
                </div>
              </div>
              <div className="form-text">
                <label htmlFor="balance">Initial Deposit</label>
                <input
                  type="text"
                  name="balance"
                  id="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  onKeyDown={onlyNumbers}
                  placeholder="USD"
                  required
                ></input>
              </div>
              <div className="login-button">
                {isLoading && <Loading />}
                <button type="submit">Open Account</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <MyFooterView />
    </div>
  );
}

export default SignUp;
