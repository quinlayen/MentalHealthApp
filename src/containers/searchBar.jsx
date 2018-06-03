import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDoctors } from '../actions/index';
import compose from 'recompose/compose';

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

const searchOptions = [
  { value: 'All', label: 'All' },
  { value: 'Therapists', label: 'Therapists' },
  { value: 'Psychiatrist', label: 'Psychiatrist' }
];

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
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={this.onFormSubmit}
      >
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <TextField
            select
            value={this.state.prop}
            label="Select Care Provider"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.searchOptions}
            onChange={this.handleChange('searchOptions')}
            input={<Input searchOptions="searchOptions" id="search-options" />}
          >
            {searchOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Search By Location"
            id="locationSearch"
            className={classNames(classes.margin, classes.textField)}
          />

          <Button>Search</Button>
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
