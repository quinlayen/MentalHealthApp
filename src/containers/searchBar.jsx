import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDoctors } from '../actions/index';
import compose from 'recompose/compose';
import { TextField, SelectField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'normal'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 'auto'
  },
  menu: {
    width: 200
  }
  //   formControl: {
  //     margin: theme.spacing.unit,
  //     minWidth: 100
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing.unit * 2
  //   }
});

// const searchOptions = [
//   { value: 'All', label: 'All' },
//   { value: 'Therapists', label: 'Therapists' },
//   { value: 'Psychiatrist', label: 'Psychiatrist' }
// ];

class SearchBar extends Component {
  state = {
    locationSearch: '',
    searchOptions: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  // handleKeyPress(e) {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //   }
  // }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchDoctors();
  }

  render() {
    const { classes } = this.props;
    const actions = [<Button type="search" label="search" primary={true} />];
    return (
      <form>
        <Field
          name="type"
          component={SelectField}
          hintText="Select Care Provider"
        >
          <MenuItem value="all" primaryText="All" />
          <MenuItem value="therapists" primaryText="Therapists" />
          <MenuItem value="psychiatrists" primaryText="Psychiatrists" />
        </Field>
        <Field name="location" component={TextField} hintText="City" />
        <Button>Search</Button>
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

export default reduxForm({
  form: 'SearchForm',
  fields: ['type', 'location']
})(SearchBar);
