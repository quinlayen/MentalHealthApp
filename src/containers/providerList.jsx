import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import {fetchDoctors} from '../actions/index'

class ProviderList extends Component{
    constructor(props){
        super(props);
       
        //this.state = {term:''}

    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props)
    //     return props.doctors;
    //   }
    renderDoctors(doctorData){
        console.log('doctorData',doctorData)
        return (
            <li key ={doctorData.first_name}>{doctorData.first_name}</li>
        )
    }

      render(){
          //console.log(this.props.doctors)
          return(
              
              <div>
                  <ul>
                    
                      {this.props.doctors.map(this.renderDoctors)}
                  </ul>
              </div>
          )
      }

}

function mapStateToProps({doctors}){
    return {doctors}
}
export default connect(mapStateToProps)(ProviderList);