import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDoctors } from "../actions/index";
import compose from "recompose/compose";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "normal"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: "auto"
  },
  menu: {
    width: 200
  }
});

const searchOptions = [
  { value: "All", label: "All" },
  { value: "Therapist", label: "Therapist" },
  { value: "Psychiatrist", label: "Psychiatrist" }
];

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchDoctors(this.state);
  }

  render() {
    const { classes } = this.props;
    const actions = [<Button type="search" label="search" primary={true} />];
    return (
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={this.onFormSubmit}
      >
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <TextField
            select
            name="type"
            value={this.state.type}
            label="Select Care Provider"
            className={classNames(classes.margin, classes.textField)}
            onChange={this.handleChange}
          >
            {searchOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="location"
            label="Search By Location"
            id="locationSearch"
            value={this.state.location}
            className={classNames(classes.margin, classes.textField)}
            onChange={this.handleChange}
          />

          <Button type="submit">Search</Button>
        </FormControl>
      </form>
    );
  }
}
SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDoctors }, dispatch);
}

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(
  SearchBar
);
