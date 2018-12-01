import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import { ProductsPage } from './components/ProductsPage/ProductsPage';


class Routes extends Component {
  render() {
	return (
	<Switch>
		<Route exact path='/' component={HomePage}/>
		<Route path='/about' component={AboutUs}/>
		<Route path='/products' component={ProductsPage}/>
	</Switch>
	);
  }
}

export default Routes;




