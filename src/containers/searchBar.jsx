import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDoctors } from '../actions/index';
import '../styles/searchBar.css';
import WOW from 'wow.js/dist/wow.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Therapist",
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
    event.preventDefault();
    this.props.fetchDoctors(this.state);
    this.props.history.push("/doctors");
  }

  render() {
    return (
      <div className="container flex-center">
        <br />
        <div className="row flex-center">
          <div className="col-lg text-center text-md-left margins">
            <h1>We Are Here For You</h1>

            <h4>Take the Next Step</h4>
            <h6>Let us help you Find Your Way!</h6>
            <br />

            <form onSubmit={this.onFormSubmit} action="/doctors">
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
                    </select>
                  </div>
                  <div>
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
                  <div className="input-group-append">
                    <button className="btn btn-sm btn-outline" type="submit">
                      <FontAwesomeIcon
                        className="search-button"
                        icon="search"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <i className="fa fa-android left right" aria-hidden="true" />
            <i className="fa fa-apple left" aria-hidden="true" />
            <i className="fa fa-windows" aria-hidden="true" />
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
