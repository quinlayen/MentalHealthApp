import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {SwipeableDrawer, Button} from '@material-ui/core'
import {} from '@material-ui/icons';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };
  
  class NavDrawer extends React.Component {
      constructor(props){
          super(props);
      }
    state = {
      left: false,
     
    };
  
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };
  
    render() {
      const { classes } = this.props;
  
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
          <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
         
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
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
  
  export default withStyles(styles)(NavDrawer);