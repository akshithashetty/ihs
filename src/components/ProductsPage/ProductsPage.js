import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { addToCart, removeFromCart } from '../../_Redux/ActionCreators/CartActionCreator';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';
import { Footer } from '../../common/Footer/Footer';
import FeatureCard from "../../common/FeatureCard/FeatureCard";
import { FEATURE_CARD_ELEMENTS } from './data';


class ProductsPage extends Component {

	state={

		selected: 'all',
		expand:false
	}

	test = () => {
		console.log(this.props.products)
	}


	onClick = ( action, name ) => {

		if(action === 'add'){
			this.props.addItem(name);
		}
		else{
			this.props.removeItem(name);
		}
	}

	render() {
		return (

			
			<Container fluid style={{padding:0}}>
				<NavbarHeader position="fixed"/>
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
				        <NavItem eventKey="Necklaces">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Necklaces
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="Batwas">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Batwas
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="Clutch">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Clutch
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="Tablewear">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Tablewear
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="Shawls">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Shawls
				            </NavText>
				        </NavItem>
				        <NavItem eventKey="Other">
				            <NavIcon>
				            	<FontAwesomeIcon icon={faAngleDoubleRight} size={'2x'} style={{color:'F5D04C'}} />
				            </NavIcon>
				            <NavText>
				                Other
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
	                                    onClick={this.onClick}
	                                    name={feature_card.name}
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
			dispatch(addToCart(item))
		},
		removeItem: (item) => {
			dispatch(removeFromCart(item))
		}

	}
}


ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export { ProductsPage };