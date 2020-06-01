import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { emailSignInStart } from "../../../redux/user/user.action";
// import { emailSignInStart } from "../../redux/user/user.actions";
// import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./sign-in.styles";

const SignIn = ({ emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} value={email} label="email" required />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          {/* <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In with Google
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);