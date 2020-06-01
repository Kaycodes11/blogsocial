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
      const { user } = this.props;
      // destructured isAuthenticated from user
      const { isAuthenticated } = user;

      if (isAuthenticated) {
        // isAuthenticated has value, exist or true then
        return <WrappedComponent />;
      }

      return <Redirect to="/signup" />;
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default compose(connect(mapStateToProps), withRouteGuard);
