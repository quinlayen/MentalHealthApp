import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import "../styles/searchBar.css";

class NavBar extends Component {
  render() {
    return (
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar navbar-custom">
        <div className="container navbar-custom">
          <Link  to="/" className="navbar-brand" >
            <strong>FYW</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-7"
            aria-controls="navbarSupportedContent-7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-7"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Profile
                </Link>
              </li> */}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// };

// class NavBar extends Component {

//   render() {
//     const { classes } = this.props;
//     return (

//       <div className='MuiPaper'>
//         <AppBar position="static">
//           <Toolbar>

//             <IconButton
//               onClick={param => this.props.toggleAction(true)}
//               className={classes.menuButton}

//               aria-label="Menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <div className= 'app-name'>
//             <Typography
//               component={Link}
//               to='/'
//               variant="title"
//               color="#FF9375"
//               className={classes.flex}>
//               MentalHealthApp
//             </Typography>
//             </div>
//             <div className='spacer'>
//             </div>
//             <Link to={"/register"}>
//             <div className='user-reg'>
//             <Button color="#FF9375">Sign Up</Button>
//             </div>
//             </Link>
//             <Link to={"/login"}>
//             <div className='user-reg'>
//             <Button color="#FF9375">Login</Button>
//             </div>
//             </Link>

//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ toggleAction }, dispatch);
// }

// function mapStateToProps({ drawer }) {
//   return { drawer };
// }

export default NavBar;
