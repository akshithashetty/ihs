import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
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
		<Navbar color="light" light expand="md" style={{justifyContent:'center',height:'70px'}}>
			<NavbarBrand href="/" className="mr-auto" style={{paddingLeft:'8%'}}>
			  	<img alt="logo" src="/img/nasa.png" height="45px"></img>
			</NavbarBrand>
		  	<NavbarToggler onClick={this.toggle} style={{marginRight:'10%',marginBottom:'3%'}}/>
		 	<Collapse isOpen={this.state.isOpen} navbar style={{paddingLeft:'12%',justifyContent:'center'}}>
				<Nav style={{width:'100%',fontWeight:600,color:'black',fontSize:'1.7vw'}} navbar>
					<NavItem style={{marginRight:'6%',color:'black'}}>
						<Link to='/' style={{color:'black',textDecoration:'none'}}>HOME</Link>
					</NavItem>
					<NavItem style={{marginRight:'6%'}}>
						<Link to='/about' style={{color:'black',textDecoration:'none'}}>ABOUT US</Link>
					</NavItem>
					<NavItem style={{}}>
						<Link to='/products' style={{color:'black',textDecoration:'none'}}>PRODUCTS</Link>
					</NavItem>
				</Nav>
			</Collapse>
	  		<Nav style={{paddingRight:'16%'}} navbar>
		  		<NavItem>
					<FontAwesomeIcon icon={faCartPlus} size={'2x'} style={{color:'F5D04C'}} />
		  		</NavItem>
	  		</Nav>
		</Navbar>
	  </Container>
	);
  }
}

export default NavbarHeader;
