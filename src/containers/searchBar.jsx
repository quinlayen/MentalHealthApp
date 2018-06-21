import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDoctors } from '../actions/index';
import '../styles/searchBar.css';
import WOW from 'wow.js/dist/wow.js';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'Therapist',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    new WOW().init();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSelect = event => this.setState({ type: event.target.value });

  onFormSubmit(event) {
    this.props.history.push('/doctors');
    event.preventDefault();
    this.props.fetchDoctors(this.state);
  }

  render() {
    return (
      
      <div class="container flex-center">
      <br/>
      <br/>
        <div class="row flex-center pt-5 mt-3">
          <div class="col-md-6 text-center text-md-left margins">
            <div class="white-text">
              <h1 class="h1-responsive wow fadeInLeft" data-wow-delay="0.3s">
                We Are Here For You{' '}
              </h1>
              <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
              <h6 class="wow fadeInLeft" data-wow-delay="0.3s">
                Take the Next Step
              </h6>
              <br />

              <form onSubmit={this.onFormSubmit} action="/doctors/result">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <select onChange={this.onSelect} value={this.state.type} name="type" className="custom-select">
                        <option value="Therapist">Therapist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="Search by City"
                        name="location"
                        id="locationSearch"
                        value={this.state.location}
                        onChange={this.handleChange}
                        textarea="max-width: 280px"
                      
                      />
                      
                    </div>
                  <button type="button" className="btn btn-sm btn-outline-white rounded-0" type="submit" id="button" >
                S
                  </button>
                  </div>
                </div>
              </form>
              <i class="fa fa-android left right" aria-hidden="true" />
              <i class="fa fa-apple left" aria-hidden="true" />
              <i class="fa fa-windows" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
  



      //older code
      // <section className="background">
      //  <div className="container">
      //   <div className="row justify-content-center">
      //      <div className="jumbotron">
      //        <h2 className="display-4 text-center">We Are Here For You</h2>
      //        <p className="lead">Find Help</p>
      //        <form onSubmit={this.onFormSubmit} action="/doctors/result">
      //          <div className="form-group">
      //            <div className="input-group">
      //              <div className="input-group-prepend">
      //                <select
      //                 onChange={this.onSelect}
      //                 value={this.state.type}
      //                 name="type"
      //                 className="custom-select"
      //               >
      //                 <option value="Therapist">Therapist</option>
      //                 <option value="Psychiatrist">Psychiatrist</option>

      //               </select>
      //             </div>
      //             <input
      //               type="text"
      //               className="form-control"
      //               aria-label="Text input with dropdown button"
      //               placeholder="Search by City"
      //               name="location"
      //               id="locationSearch"
      //               value={this.state.location}
      //               onChange={this.handleChange}
      //             />
      //           </div>
      //         </div>
      //         <button type = 'button' className="btn btn-sm btn-outline-white rounded-0 btn-block" type="submit">
      //           Search
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
      // </section>
      
      
      
      
        


    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDoctors }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
