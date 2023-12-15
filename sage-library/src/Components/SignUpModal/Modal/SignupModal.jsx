import { useState } from "react";
import { useModal } from "../Modal";
import "./SignUpModal.css";
import { useAuth } from "../../../utils/Auth";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const { closeModal } = useModal();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);
  const [signupUser, setSignupUser] = useState({
    signUsername: "",
    signUppassword: "",
    signConfirmPassword: "",
  });
  const [loginUser, setLoginUser] = useState({
    loginUsername: "",
    loginPassword: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // setIsLoggedIn(true);
    closeModal();
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // setIsLoggedIn(true);
    closeModal();
  };

  const signupClick = () => {
    setSignup(true);
    setLogin(false);
  };

  const loginClick = () => {
    setLogin(true);
    setSignup(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    auth.login(loginUser);
    navigate("/login", {replace: true});
  };


  // onChange functions for signup and login forms
  const handleSignupChange = (e) => {
    setSignupUser({
      ...signupUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sage__modal-background">
      <div className="sage__modal">
        <div className="sage__modal-button">
          <button onClick={signupClick}>Sign up</button>
          <button onClick={loginClick}>Login</button>
        </div>
        {signup && (
          <form className="sage__modal-signup-form">
            <label>
              Username
              <input
                type="text"
                name="signUsername"
                value={signupUser.signUsername}
                onChange={handleSignupChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="signUppassword"
                value={signupUser.signUppassword}
                onChange={handleSignupChange}
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="signConfirmPassword"
                value={signupUser.signConfirmPassword}
                onChange={handleSignupChange}
              />
            </label>

            <button
              type="submit"
              className="sage__modal-signup-form-button"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </form>
        )}

        {login && (
          <form className="sage__modal-login-form">
            <label>
              Username
              <input
                type="text"
                name="loginUsername"
                value={loginUser.loginUsername}
                onChange={handleLoginChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="loginPassword"
                value={loginUser.loginPassword}
                onChange={handleLoginChange}
              />
            </label>

            <button
              type="submit"
              className="sage__modal-login-form-button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupModal;
