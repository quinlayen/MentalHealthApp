import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {SwipeableDrawer, Button} from '@material-ui/core'
import {} from '@material-ui/icons';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {drawerToggleAction} from '../actions/index';
import compose from 'recompose/compose';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };
  
  class NavDrawer extends Component {
      constructor(props){
          super(props);
      }
    state = {
      left: false,
     
    };

    static getDerivedStateFromProps(props,state){
      console.log('props in drawer', props)
      console.log('state in drawer', state)

      return {left:props.drawer.drawer};
    }
    
    toggleDrawer = (isOpen) => () => {
      this.setState({
        left : isOpen,
      });
    };
  

  
    render() {
      const { classes } = this.props;
      console.log('in render', this.props)
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
  
      return (
        <div>
          {/* <Button onClick={this.props.toggleDrawer('left', true)}>Open Left</Button> */}
         
          <SwipeableDrawer
            open={this.state.left}
            onClose={(param) =>this.props.toggleDrawer( false)}
            onOpen={(param) =>this.props.toggleDrawer( true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={(param) =>this.props.toggleDrawer( false)}
              onKeyDown={(param) =>this.props.toggleDrawer( false)}
            >
              {sideList}
            </div>
          </SwipeableDrawer>
          
        </div>
      );
    }
  }
  
  NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 

  function mapStateToProps({drawer}){
    return {drawer};
  }

  export default compose(withStyles(styles), connect(mapStateToProps))(NavDrawer);