import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { SwipeableDrawer, Button } from '@material-ui/core';
import {} from '@material-ui/icons';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAction } from '../actions/index';
import compose from 'recompose/compose';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
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
    //console.log('props.drawer', props.drawer);
    return props.drawer;
  }

  toggleDrawer = (open) => () => {
    console.log('open', open)
    this.setState({
      left : open,
    }, ()=>{
      console.log('state after toggle', this.state.left)
    })
  };

  render() {
    //console.log('props in drawer', this.props)
    const { classes } = this.props;
    //console.log('in render', this.props)
    const sideList = (
      <div className={classes.list}>
        <List>Hello 1</List>
        <Divider />
        <List>Hello 2</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>Hello 4</List>
        <Divider />
        <List>Hello 3</List>
      </div>
    );
    //console.log(this.state.left)
    return (
      <div>
        <SwipeableDrawer
          open={this.state.left}
          onClose={param => {
            //console.log('onCloseSwipeableDrawer clicked');
            this.props.toggleAction(false);
          }}
          onOpen={param => {
           // console.log('onOpenSwipableDrawer');
            this.props.toggleAction(true);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={param => {
              //console.log('onClickDiv');
              this.props.toggleAction(false);
            }}
            onKeyDown={param => {
              //console.log('onKeyDownDiv');
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

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(NavDrawer);
