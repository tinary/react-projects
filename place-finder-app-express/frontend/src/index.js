import React from "react";
import ReactDOM from "react-dom";
//import App from './components/App';
import {BrowserRouter as Router, Route } from 'react-router-dom';


import App from './components/App';
import ExploreForm from './components/ExploreForm';
import VenuesDisplay from "./components/VenuesDisplay";



ReactDOM.render(

  <Router>
	  <App>
		  <Route exact path='/' component={ExploreForm}/>
		  <Route exact path='/search-venues' component={VenuesDisplay}/>
	  </App>
	</Router>

,
  document.getElementById('app')
);
