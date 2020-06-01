import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../../redux/user/user.action";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // destructured from initial state variable/props (i.e userCredentials )
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    // setUserCredentials called and it expects an Object & since I intend to take all userCrendtials so ...userCredentials
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
  // }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  // signUpStart method value will be something and then it'll be dispatch to reducer
});

export default connect(null, mapDispatchToProps)(SignUp);
/* as user submit the form -> if it's done properly -> Get the value from
succesful sign-up; that should be the value of signUpSuccess(): mapDispatchToProps() ->

[before goes to reducer take just make a function that'll post to database on succssful form submission then
dispatch/put() whatever required as arguments to signUpSuccess to be sent to reducer else invoke signUpFaliure()]

this dispatched value goes to reducer and sit as value to 'currentUser' property -> now use state wherever needed
*/
