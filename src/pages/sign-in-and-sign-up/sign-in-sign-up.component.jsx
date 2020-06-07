import React from "react";
import SignIn from "../../app/components/sign-in/sign-in.component";
import SignUp from "../../app/components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignupPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignupPage;
