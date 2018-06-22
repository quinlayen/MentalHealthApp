import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDoctors } from "../actions/index";
import "../styles/searchBar.css";
import WOW from "wow.js/dist/wow.js";

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
  componentDidMount() {
    new WOW().init();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSelect = event => this.setState({ type: event.target.value });

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchDoctors(this.state);
    // console.log("this.props", this.props);
    this.props.history.push("/doctors");
  }

  render() {
    return (
      <div className="container flex-center">
        <div className="row flex-center pt-5 mt-3">
          <div className="col-md-6 text-center text-md-left margins">
            <div className="white-text">
              {/* <h1
                className="h1-responsive wow fadeInLeft"
                data-wow-delay="0.3s"
              > */}
              {/* </h1> */}
              <h2 className="display-4 text-center">We Are Here For You</h2>
              <p className="lead">Take the Next Step</p>
              {/* <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
              <h6 className="wow fadeInLeft" data-wow-delay="0.3s"></h6> */}
              {/* <br /> */}
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
                        textarea="max-width: 280px"
                      />
                    </div>
                    <br />
                    <br />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-white rounded-0 btn-block"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <i className="fa fa-android left right" aria-hidden="true" />
              <i className="fa fa-apple left" aria-hidden="true" />
              <i className="fa fa-windows" aria-hidden="true" />
            </div>
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
