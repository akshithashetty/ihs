import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateCart from '../../_Redux/ActionCreators/CartActionCreator';

class ProductsPage extends Component {

	test = () => {
		console.log(this.props.products)
	}

	addToCart = () => {

		this.props.addItem('necklace')
	}

	render() {
		return (
			<div>
				Products page
				<button onClick={this.addToCart}>testfirst</button>
				<button onClick={this.test}>testfinal</button>
			</div>
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}

function mapDispatchToProps(dispatch) {

	return {
		addItem: (item) => {
			dispatch(updateCart(item))
	}

	}
}


ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export { ProductsPage };