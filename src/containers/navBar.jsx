import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleAction } from "../actions/index";
import compose from "recompose/compose";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={param => this.props.toggleAction(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              component={Link}
              to='/'
              variant="title"
              color="inherit"
              className={classes.flex}>
              MentalHealthApp
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleAction }, dispatch);
}

function mapStateToProps({ drawer }) {
  return { drawer };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavBar);
