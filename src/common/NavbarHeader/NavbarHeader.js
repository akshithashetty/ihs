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
	DropdownItem } from 'reactstrap';

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
		<Navbar color="light" light expand="md" style={{justifyContent:'center'}}>
			<NavbarBrand href="/" className="mr-auto" style={{paddingLeft:'8%'}}>
			  	<img alt="logo" src="/img/nasa.png" height="45px"></img>
			</NavbarBrand>
		  	<NavbarToggler onClick={this.toggle} style={{marginRight:'10%',marginBottom:'3%'}}/>
		 	<Collapse isOpen={this.state.isOpen} navbar style={{paddingLeft:'12%',justifyContent:'center'}}>
				<Nav style={{width:'100%',fontWeight:600,color:'black'}} navbar>
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
					<FontAwesomeIcon icon={faCartPlus} size={'2x'} style={{color:'BDB76B'}} />
		  		</NavItem>
	  		</Nav>
		</Navbar>
	  </Container>
	);
  }
}

export default NavbarHeader;
