import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
  	console.log(this.state.isOpen)
  	if(this.state.isOpen==false){
  		document.getElementById("notification").style.visibility = "hidden";
  	}
  	else{
  		document.getElementById("notification").style.visibility = "visible";
  	}
	this.setState({

		isOpen: !this.state.isOpen

	});
  }
  render() {
	return (
	  <Container fluid style={{padding:0,position: this.props.position ,zIndex:98}}>
		<Navbar color="light" light expand="md" style={{justifyContent:'center'}}>
			<NavbarBrand className="mr-auto" style={{paddingLeft:'8%'}}>
			  	<img style={{backgroundSize:'cover',height:'45px'}}alt="logo" src="/img/logo.jpg"></img>
			</NavbarBrand>
		  	<NavbarToggler onClick={this.toggle} style={{marginRight:'10%',marginBottom:'3%'}}/>
		 	<Collapse isOpen={this.state.isOpen} navbar style={{paddingLeft:'12%',justifyContent:'center'}}>
				<Nav style={{width:'100%',fontWeight:600,color:'black',fontSize:'20px',zIndex:99}} navbar>
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
		  			<Link to="/cart">
						<FontAwesomeIcon icon={faCartPlus} size={'2x'} style={{color:'F5D04C'}} />
					</Link>
		  		</NavItem>
		  		<NavItem id="notification" style={{
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
					<span>{ this.props.count }</span>
		  		</NavItem>
	  		</Nav>

		</Navbar>
	  </Container>
	);
  }
}

function mapStateToProps({ count }) {
	return { count };
}

NavbarHeader = connect(mapStateToProps, {})(NavbarHeader);
export { NavbarHeader };
