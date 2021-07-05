import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 ">
                  TaskTabs
                </h1>
                <p className="lead line-1 anim-typewriter">
                  Create and manage your own projects, all in one place!
                </p>
                <hr />
                <Link className="btn btn-lg mr-2" style={{backgroundColor: "#3C3C3C", color: "#fff" , fontFamily: "'Prompt', sans-serif"}} to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" style={{backgroundColor: "#3C3C3C", color: "#fff" , fontFamily: "'Prompt', sans-serif"}} to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);