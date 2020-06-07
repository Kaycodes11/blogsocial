import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { checkUserSession } from "../redux/user/user.action";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "../pages/sign-in-and-sign-up/sign-in-sign-up.component";
import withRouteGuardComponent from "./components/with-router-guard/with-route-guard.component";
import CreatePost from "./components/create-post/create-post.component";

// import "./App.css";

const homePage = props => {
  console.log("routeObj", props);
  return (
    <div>
      <h2>Here it is homepage</h2>
    </div>
  );
};

class MyProfClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Oto kore lav nei</h1>;
  }
}

const MyProfile = withRouter(
  withRouteGuardComponent(() => {
    return (
      <div>
        <h3>This page should only be accessible after succssful login</h3>
      </div>
    );
  })
);

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    console.log("currentUser: ", currentUser);
    checkUserSession(); //returns an obj with type
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/myprofile" render={() => (currentUser ? <MyProfile /> : <Redirect to="/" />)} />
        {/* <Route exact path="/signup" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignupPage />)} /> */}
        <Route exact path="/private" component={withRouteGuardComponent(MyProfClass)} />
        <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignupPage />)} />
        <Route exact path="/create" component={withRouteGuardComponent(CreatePost)} />
        <Route exact path="*" render={() => "404 not found"} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
