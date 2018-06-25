import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/modal.css';
import { closeModal } from '../actions/index';

class ContactModal extends Component {
    constructor(props){
        super(props);
       
    }
   
    render(){
       
        return (
            <div>
                    {/* modal code */}
                    <div className="modal" id="modal">
                        <div className="modal-container">
                            <div className="modal-header">
                                <h1>  This is the header </h1>
                            </div>
                            <hr/>
                            <div className="modal-body">
                                <p>This is the body</p>
                            </div>
                            <hr/>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={this.props.closeModal}></button>
                            </div>
                        </div>
                    </div>
                    {/* overlay code */}
                    <div className="modal-overlay" id="modal-overlay">
                    
                    </div>

            </div>
    
        )
    }




}
function mapStateToProps({modalToggle}){
    return {modalToggle}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeModal }, dispatch);
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactModal);
