import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import SignUp from "./components/sign-up/sign-up.component";

import "./App.css";

const homePage = () => {
  return (
    <div>
      <h2>Here it is homepage</h2>
    </div>
  );
};
const myProfile = () => {
  return (
    <div>
      <h3>This page should only be accessible after succssful login</h3>
    </div>
  );
};

const App = ({ currentUser }) => {
  const [text, setText] = useState("Hello REACT");
  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/myprofile" component={myProfile} />
        <Route exact path="/signup" render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);

/* If action needed to be changed after dispatch before going to reducer; use saga or thunk & if state isn't
needed as it's from reducer then use 'Selector' to change to STATE and then use it within any component as needed

1) From which action currentUser's value is coming from? signUpSuccess()
2) When and in which component am I providing value to signUpSuccess action
to get its return value to currentUser property? middleware or sign-up component

HOC: Higher Order Component transforms an orginal component to something new (add or render specifically)
HOC components are made by 'with' prefix
Container/View Pattern:
Flow: if currentUser exist then send to homepage else same page
*/
