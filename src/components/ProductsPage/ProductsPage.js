import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import updateCart from '../../_Redux/ActionCreators/CartActionCreator';
import NavbarHeader from '../../common/NavbarHeader/NavbarHeader';



class ProductsPage extends Component {

	state={

		selected: 'all',
		expnd:false
	}

	test = () => {
		console.log(this.props.products)
	}

	addToCart = () => {

		this.props.addItem('necklace')
	}

	render() {
		return (
			{/*<div>
				Products page
				<button onClick={this.addToCart}>testfirst</button>
				<button onClick={this.test}>testfinal</button>
			</div>
			*/},
			<Container fluid style={{padding:0}}>
				<NavbarHeader />
				<SideNav onSelect={(selected) => {
					
					this.setState({

						selected: selected,
						expand: false
					})
					console.log(this.state.selected);
	    		}} 

	    		onToggle = {() =>{
					this.setState({

						expand: !this.state.expand
					})

	    		}}
	    		expanded={this.state.expand}
	    		style={{top:'70px',zIndex:0}}
				>
				    <SideNav.Toggle expanded={true}/>
				    <SideNav.Nav defaultSelected="all">
				        <NavItem eventKey="all">
				            <NavIcon>
				                <FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                All Products
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="necklaces">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Necklaces
				            </NavText>
				        </NavItem>
				    </SideNav.Nav>
				</SideNav>
				<Container fluid style={{paddingLeft:100}}>
					hello
				</Container>
			</Container>
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