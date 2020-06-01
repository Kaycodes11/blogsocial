import React, { useState } from "react";
import { connect } from "react-redux";
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
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <input type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} label="password" required />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirmPassword"
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
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
