import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Container, Row, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';


class MyCart extends Component {

	state={
		name:"",
		email:"",
		phone:""
	}

	handleNameChange = (e) => {
		this.setState({name: e.target.value})
	}

	handlePhoneChange = (e) => {
		this.setState({phone: e.target.value})
	}

	handleEmailChange = (e) => {
		this.setState({email: e.target.value})
	}

	render() {

		return (
			<Container fluid style={{padding:0}}>
				<NavbarHeader position=""/>
				<Container fluid style={{backgroundImage:'url("/img/form_back.png")',backgroundSize:'cover',height:'57vw',paddingTop:'3%',paddingBottom:'8%',paddingLeft:'45%',paddingRight:'0%'}}>
					<span style={{fontWeight:600,fontSize:'3vw',marginLeft:'8%'}}>Request Confirmation Form</span>
					<Form style={{marginTop:'4%',marginLeft:'8%'}} action="https://formspree.io/merchant.kaiz@gmail.com" method="POST">
						<FormGroup style={{marginBottom:'3vw'}}>
							<Input style={{width:'70%',height:'5%',fontSize:'1.6vw'}} type="text" name="name" placeholder="Full Name*" onChange={this.handleNameChange}/>
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw'}}>
							<Input style={{width:'70%',height:'5%',fontSize:'1.6vw'}} type="number*" name="phone" placeholder="Phone Number*" onChange={this.handlePhoneChange}/>
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw'}}>
							<Input style={{width:'70%',height:'5%',fontSize:'1.6vw'}} type="email" name="email" placeholder="Email*" onChange={this.handleEmailChange}/>
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw'}}>
							<Input style={{width:'70%',height:'5%',fontSize:'1.6vw'}} type="text" name="city" placeholder="City" />
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw',width:'70%'}}>
							<MediaQuery query="(min-device-width: 1224px)">
								<span style={{fontWeight:600, fontSize:'1.6vw'}}>We will get in touch with you within 24 hours. In case of any queries, please contact +91 22-23476453</span>
							</MediaQuery>
							</FormGroup>
						<Button color="warning" style={{height:'10%',fontSize:'1.6vw',color:'white'}} disabled={!this.state.name || !this.state.phone || !this.state.email}>Request Order</Button>
					</Form>
				</Container>
			</Container>
			
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}


MyCart = connect(mapStateToProps, {})(MyCart);
export { MyCart };