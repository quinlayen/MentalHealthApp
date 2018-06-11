// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import classNames from "classnames";
// import Input from "@material-ui/core/Input";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchDoctors } from "../actions/index";
// import compose from "recompose/compose";

// const styles = theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     margin: "normal"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit,
//     width: "auto"
//   },
//   menu: {
//     width: 200
//   }
// });

// const searchOptions = [
//   { value: "All", label: "All" },
//   { value: "Therapist", label: "Therapist" },
//   { value: "Psychiatrist", label: "Psychiatrist" }
// ];

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       type: "",
//       location: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({ [name]: value });
//   }

//   onFormSubmit(e) {
//     this.props.history.push('/doctors/result')
//     e.preventDefault();
//     this.props.fetchDoctors(this.state);
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <form
//         className={classes.root}
//         autoComplete="off"
//         onSubmit={this.onFormSubmit}
//       >
//         <FormControl className={classNames(classes.margin, classes.textField)}>
//           <TextField
//             select
//             name="type"
//             value={this.state.type}
//             label="Select Care Provider"
//             className={classNames(classes.margin, classes.textField)}
//             onChange={this.handleChange}
//           >
//             {searchOptions.map(option => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             name="location"
//             label="Search By Location"
//             id="locationSearch"
//             value={this.state.location}
//             className={classNames(classes.margin, classes.textField)}
//             onChange={this.handleChange}
//           />

//           <Button type="submit" >Search</Button>
//         </FormControl>
//       </form>
//     );
//   }
// }
// SearchBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchDoctors }, dispatch);
// }

// export default compose(
//   withStyles(styles),
//   connect(
//     null,
//     mapDispatchToProps
//   )
// )(SearchBar);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
//import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDoctors } from '../actions/index';
import compose from 'recompose/compose';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.selectButtonName = React.createRef();
    this.state = {
      type: '',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(this.state)
    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    this.props.history.push('/doctors/result');
    e.preventDefault();
    this.props.fetchDoctors(this.state);
    console.log('state', this.state)
  }
  onSelect(event) {
    //console.log(event.target.textContent)
    this.setState({ type: event.currentTarget.textContent });
  }

  render() {
    return (
      <div className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="row justify-content-md-center">
          <div className="col-8">
            <div className="jumbotron">
              <h2 className="display-4">We Are Here For You</h2>
              <p className="lead">Find Help</p>
              <form onSubmit={this.onFormSubmit} action="/doctors/result">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      {/* <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        id="select-button"
                        type="button"
                        data-toggle="dropdown"
                        arai-haspopup="true"
                        aria-expanded="false"
                        placeholder="Therapist"
                        name="type">
                        {this.state.type}
                      </button> */}
                      <select onChange={this.handleChange} value={this.state.selectedValue} name="type" className="custom-select">
                        <option name="type" value="Therapist" selected>Therapist</option>
                        <option name="type" value="Psychiatrist">Psychiatrist</option>
                        <option name="type" value="All">All</option>
                      </select>
                      {/* <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={this.onSelect} name="type" value="Therapist">
                          Therapist
                        </a>
                        <a className="dropdown-item" onClick={this.onSelect} name="type" value="Psychiatrist">
                          Psychiatrist
                        </a>
                        <div role="separator" className="dropdown-divider" />
                        <a className="dropdown-item">All</a>
                      </div> */}
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
                <button className="btn btn-primary btn-sm" type="submit" role="button">
                  Search
                </button>
              </form>
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
