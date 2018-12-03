import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button} from 'reactstrap';

class MyCart extends Component {



	render() {
		return (
			<Container>
				<form action="https://formspree.io/merchant.kaiz@gmail.com" method="POST" >
					<input type="text" name="products" value={this.props.products} style={{display:'none'}}/>
					<button type="submit">submit</button>
				</form>
			</Container>
			
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}


MyCart = connect(mapStateToProps, {})(MyCart);
export { MyCart };