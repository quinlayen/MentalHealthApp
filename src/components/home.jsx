import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../containers/searchBar';
import Background from '../styles/static/ocs_cropped_2.jpg';
import '../styles/home.css';



const Main = props =>{
    return(
        <div className="container">
        <img src={Background} className="bg" />
            
            <SearchBar />
           
        </div>
    )
}
export default Main;