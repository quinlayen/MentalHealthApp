import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../actions/index";
import "../styles/forms.css";

class UserLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("id")) {
      this.props.history.push("/login");
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    this.props.login(this.state, () => {
      console.log("LOGGINED IN");
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleLogin}>
          <div
            className={
              "form-group" +
              (this.state.submitted && !this.state.username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.submitted &&
              !this.state.username && (
                <div className="help-block">Username is required</div>
              )}
          </div>
          <div
            className={
              "form-group" +
              (this.state.submitted && !this.state.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.submitted &&
              !this.state.password && (
                <div className="help-block">Password is required</div>
              )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: function(user, redirectCallback) {
      dispatch(loginAction(user, redirectCallback));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserLoginForm)
);
