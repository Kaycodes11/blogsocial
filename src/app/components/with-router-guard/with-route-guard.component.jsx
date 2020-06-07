import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const withRouteGuard = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {}

    render() {
      const { user, match } = this.props;
      console.log(this.props);

      // destructured isAuthenticated from user
      const { isAuthenticated } = user;

      if (isAuthenticated && match.path === "/signin") {
        // if isAuthenticated and match.path === /'signin' then redirect to homepage
        return <Redirect to="/signin" />;
      } else if (isAuthenticated) {
        // isAuthenticated has value, exist or true then
        return <WrappedComponent />;
      }

      return <Redirect to="/signin" />;
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default compose(connect(mapStateToProps), withRouteGuard);
