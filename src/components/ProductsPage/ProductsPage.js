import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import updateCart from '../../_Redux/ActionCreators/CartActionCreator';
import NavbarHeader from '../../common/NavbarHeader/NavbarHeader';
import FeatureCard from "../../common/FeatureCard/FeatureCard";
import { FEATURE_CARD_ELEMENTS } from './data';


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
	    		style={{top:'70px',zIndex:97,position:'fixed'}}
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
				<Container fluid style={{paddingLeft:100,paddingRight:36,paddingTop:100,paddingBottom:36}}>

					<Row style={{justifyContent:'center'}}>
						{
	                        FEATURE_CARD_ELEMENTS.map((feature_card) => {

	                            return (feature_card.category === this.state.selected || this.state.selected === "all") ? 
	                            (
	                                <FeatureCard
	                                    img={feature_card.img}
	                                    text={feature_card.text}
	                                />

	                            ):"";
	                        })
	                    }
                    </Row>
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