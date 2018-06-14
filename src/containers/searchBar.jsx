import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDoctors } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSelect = event => this.setState({ type: event.target.value });

  onFormSubmit(event) {
    this.props.history.push("/doctors");
    event.preventDefault();
    this.props.fetchDoctors(this.state);
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="jumbotron">
            <h2 className="display-4">We Are Here For You</h2>
            <p className="lead">Find Help</p>
            <form onSubmit={this.onFormSubmit} action="/doctors/result">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select
                      onChange={this.onSelect}
                      value={this.state.type}
                      name="type"
                      className="custom-select"
                    >
                      <option value="Therapist">Therapist</option>
                      <option value="Psychiatrist">Psychiatrist</option>
                      <option value="All">All</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Search by City"
                    name="location"
                    id="locationSearch"
                    value={this.state.location}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button className="btn btn-primary btn-sm" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDoctors }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
