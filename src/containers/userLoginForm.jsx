import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../actions/index";
import "../styles/userLoginForm.css";

class UserLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

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

    this.props.login(this.state, () => {
      console.log("LOGGINED IN");
      this.props.history.push("/");
    });
  }

  render() {
    return (
      
      <div className="col-md-6 col-centered">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
        <div className="col-6">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleLogin}>
          <div className={"form-group"}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>

      </div>
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
