import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';
import { Footer } from '../../common/Footer/Footer';



class MyCart extends Component {

	state={
		name:"",
		email:"",
		phone:"",
		pincode:"",
		products:[],
		quantity:[],
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

	handlePincodeChange = (e) => {
		this.setState({pincode: e.target.value})
	}

	componentDidMount = () => {

		var a = [], b = [], arr=[],prev;
		arr=this.props.products;
	    arr.sort();
	    for ( var i = 0; i < arr.length; i++ ) {
	        if ( arr[i] !== prev ) {
	            a.push(arr[i]);
	            b.push(1);
	        } else {
	            b[b.length-1]++;
	        }
	        prev = arr[i];
	    }

	    this.setState({products: a, quantity: b})
	}

    _createList() {
    	let counter=-1;
    	
		return this.state.products.map((product) => {
			
			console.log(this.state.quantity[counter]);
			counter=counter+1;
			return(
				<Container>
					<Row>
						<span style={{fontWeight:500, fontSize:'2vw',width:'50vw',paddingLeft:'10vw'}}>Product</span>
						<span style={{fontWeight:500, fontSize:'2vw'}}>Quantity</span>
					</Row>
					<Row>
						<span style={{fontWeight:600, fontSize:'3vw',width:'50vw',paddingLeft:'10vw'}}>{product}</span>
						<span style={{fontWeight:600, fontSize:'3vw',paddingLeft:'3vw'}}>{this.state.quantity[counter]}</span>
					</Row>
				</Container>

			);
		})
       }

	render() {

		return (
			<Container fluid style={{padding:0,minHeight:'100vh'}}>
				<NavbarHeader position=""/>
				<Container fluid >
					<Row style={{padding:'3%'}}>
						<span style={{fontWeight:600,fontSize:'3vw'}}>Step 1- Check Your Cart</span>
					</Row>
					<Row style={{justifyContent:'center'}}>
						{
							this._createList()

						}
					</Row>
					<Link to="/products"><Button color="primary" style={{fontSize:'2vw',fontWeight:'600',verticalAlign:'center',marginLeft:'35vw',marginTop:'3vw'}}>Modify Cart</Button></Link>
				</Container>
					<Row style={{margin:0,padding:'3%'}}>
						<span style={{fontWeight:600,fontSize:'3vw'}}>Step 2- Fill Confirmation Form</span>
					</Row>
				<Container fluid style={{backgroundImage:'url("/img/form_back.png")',backgroundSize:'cover',height:'57vw',paddingTop:'3%',paddingBottom:'8%',paddingLeft:'45%',paddingRight:'0%'}}>
					<span style={{fontWeight:600,fontSize:'3vw',marginLeft:'8%'}}>Request Confirmation Form</span>
					<Form style={{marginTop:'4%',marginLeft:'8%'}} action="https://formspree.io/tara.society1@gmail.com" method="POST">
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
							<Input style={{width:'70%',height:'5%',fontSize:'1.6vw'}} type="text" name="pincode" placeholder="Pincode*" onChange={this.handlePincodeChange}/>
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw'}}>
							<Input style={{display:'none'}} name="Products Requested" type="text" value={this.props.products}/>
						</FormGroup>
						<FormGroup style={{marginBottom:'3vw',width:'70%'}}>
							<MediaQuery query="(min-device-width: 1224px)">
								<span style={{fontWeight:600, fontSize:'1.6vw'}}>We will get in touch with you within 24 hours. In case of any queries, please contact +91 22-23476453</span>
							</MediaQuery>
							</FormGroup>
						<Button color="warning" style={{height:'10%',fontSize:'1.6vw',color:'white'}} disabled={!this.state.name || !this.state.phone || !this.state.email || !this.state.pincode}>Request Order</Button>
					</Form>
				</Container>
				<Container>
					<MediaQuery query="(max-device-width: 1224px)">
						<Container fluid style={{backgroundImage:'url("/img/logo2.jpg")',backgroundSize:'cover',height:'60vw',paddingTop:'3%',paddingBottom:'8%',paddingLeft:'45%',paddingRight:'0%'}}>
						</Container>
					</MediaQuery>
				</Container>
				<Footer />
			</Container>
			
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}


MyCart = connect(mapStateToProps, {})(MyCart);
export { MyCart };