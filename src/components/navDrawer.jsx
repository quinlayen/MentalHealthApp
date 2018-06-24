import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import {} from "@material-ui/icons";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleAction } from "../actions/index";
import compose from "recompose/compose";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class NavDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return props.drawer;
  }

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>Options</List>
        <Divider />
        <List>Account</List>
        <List>Detailed Search</List>
      </div>
    );

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>Hello 4</List>
    //     <Divider />
    //     <List>Hello 3</List>
    //   </div>
    // );

    return (
      <div>
        <SwipeableDrawer
          open={this.state.left}
          onClose={param => {
            this.props.toggleAction(false);
          }}
          onOpen={param => {
            this.props.toggleAction(true);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={param => {
              this.props.toggleAction(false);
            }}
            onKeyDown={param => {
              this.props.toggleAction(false);
            }}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
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
)(NavDrawer);
