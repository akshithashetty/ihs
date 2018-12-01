import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Row } from 'reactstrap';



class NavbarHeader extends Component {
  constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
	  isOpen: false
	};
  }
  toggle() {
	this.setState({
	  isOpen: !this.state.isOpen
	});
  }
  render() {
	return (
	  <Container fluid style={{padding:0}}>
		<Navbar color="light" light expand="md" style={{justifyContent:'center',height:'70px'}}>
			<NavbarBrand href="/" className="mr-auto" style={{paddingLeft:'8%'}}>
			  	<img alt="logo" src="/img/nasa.png" height="45px"></img>
			</NavbarBrand>
		  	<NavbarToggler onClick={this.toggle} style={{marginRight:'10%',marginBottom:'3%'}}/>
		 	<Collapse isOpen={this.state.isOpen} navbar style={{paddingLeft:'12%',justifyContent:'center'}}>
				<Nav style={{width:'100%',fontWeight:600,color:'black',fontSize:'1.7vw'}} navbar>
					<NavItem style={{marginRight:'6%'}}>
						<NavLink href="/components/">HOME</NavLink>
					</NavItem>
					<NavItem style={{marginRight:'6%'}}>
						<NavLink href="">ABOUT US</NavLink>
					</NavItem>
					<NavItem style={{}}>
						<NavLink href="">PRODUCTS</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
	  		<Nav style={{paddingRight:'16%'}} navbar>
		  		<NavItem>
					<FontAwesomeIcon icon={faCartPlus} size={'2x'} style={{color:'F5D04C'}} />

		  		</NavItem>
		  		<NavItem style={{
	  				padding:0,
					top:'9%',
					right:'15.5%',
					position:'absolute',
					background: '#ff6600',
					height: '20px',
					width: '18px',
					textAlign: 'center',
					fontSize: '13px',
					borderRadius: '50%',
					color: 'white',
					border: '1px solid #ff6600',
					fontFamily: 'sans-serif',
					fontWeight: 'bold'}}>
					<span>3</span>


		  		</NavItem>
	  		</Nav>
		</Navbar>
	  </Container>
	);
  }
}

export default NavbarHeader;
