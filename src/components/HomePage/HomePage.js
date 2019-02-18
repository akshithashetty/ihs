import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';
import { Link } from 'react-router-dom';
import { Footer } from '../../common/Footer/Footer';
import CarouselHome from './CarouselHome'
import choice from './choice.png'
import cart from './cardCart.png'
import form from './form2.png'
import openingInvertedCommas from './openinginvertedcommas.png'
import closingInvertedCommas from './closinginvertedcommas.png'
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
    	<Container fluid style={{padding:0, minHeight:'100vh'}}>
    		<NavbarHeader position=""/>
    		<Container fluid className="backgroundImage">
    			<Container style={{paddingBottom:'3%',margin:'10px',}}>
    				<Row className="backgroundImageTitle">
    					<span>Something beyond just gifts, get the joy of giving back</span>
    				</Row>
    				<Row className="backgroundImageSubTitle">
    					<span>We are a foundation that helps women become self-sufficient by helping them tailor their ideas.</span>
    				</Row>
    				<Row style={{justifyContent:'left',paddingTop:'6%',paddingRight:'4%',fontStyle:'italic'}}>
    					<Link to="/about"><Button className="backgroundImageButtonLeft" >KNOW MORE</Button></Link>
    					<Link to="/products"><Button className="backgroundImageButtonRight">VIEW PRODUCTS</Button></Link>
    				</Row>

    			</Container>
    		</Container>
			<Container>
				<Row style={{justifyContent:'center'}}>
					<hr style={{border:'1px solid #2F2D5D',width:'35%', marginTop:'4%'}} />
				</Row>
			</Container>
			<Container>
				<Row className="sectionHeading">
					<span>Get Started</span>
				</Row>
				<Row style={{justifyContent:'center',paddingTop:'2%',fontSize:'1.5vw',margin:0,}}>
                    <Container className="stepsCard">
                        <Row className="stepsCardImageRow">
                            <img className="stepsCardImage" alt="logo" src={choice}></img>
                        </Row>
                        <Row className="stepsCardTitleRow">
                            <span className="stepsCardTitle" >
                            Firstly,
                            </span>
                        </Row>
                        <Row className="stepsCardDescription" >
                            Choose what suits your needs from our wide range of products
                        </Row>
                    </Container>

                    <Container className="stepsCard" >
                        <Row className="stepsCardImageRow" >
                        <img  className="stepsCardImage" alt="logo" src={cart}></img>
                        </Row>
                        <Row className="stepsCardTitleRow">
                        <span className="stepsCardTitle">
                        Next,
                        </span>
                        </Row>
                        <Row className="stepsCardDescription" >
                        Add what you like to the shopping cart and shortlist later on.
                        </Row>
                    </Container>


                    <Container className="stepsCard" >
                        <Row className="stepsCardImageRow"  >
                        <img className="stepsCardImage" alt="logo" src={form}></img>
                        </Row>
                        <Row className="stepsCardTitleRow" >
                        <span className="stepsCardTitle">
                        Finally,
                        </span>
                        </Row>
                        <Row className="stepsCardDescription">
                        Fill the order confirmation form and we will get in touch with you.
                        </Row>
                    </Container>
				</Row>
			</Container>
			<Container>
				<Row style={{justifyContent:'center'}}>
					<hr style={{border:'1px solid #2F2D5D',width:'35%', marginBottom:'4%',marginTop:'4%'}} />
				</Row>
			</Container>

            <Container>
                <Row className="sectionHeading">
                    <span>Note from the Founder</span>
                </Row>
                <Row>
                <img  className="noteComma" alt="logo" src={openingInvertedCommas}></img>
                </Row>
				<Row>
                <span className="noteMessage">
                The aim was to not only employ women but also make them feel like the contributers to the society. It was a process that began right from day one and it gives everyone at tara a sense of fullfillement to see how it has turned out. We chose this digital platform so that we could expose more people to this sense of satisfation through buying our products.
                </span>
                </Row>
                <Row>
                <span className="noteMessageAuthor">
                -Barkha Singh
                </span>
                <span>
                <img  className="noteComma" alt="logo" src={closingInvertedCommas}></img>
                </span>
                </Row>
                <Row style={{justifyContent:'center'}}>
					<hr style={{border:'1px solid #2F2D5D',width:'35%', marginBottom:'4%',marginTop:'4%'}} />
				</Row>
			</Container>


			<Container fluid style={{padding:'0%'}}>
				<CarouselHome />
			</Container>
			<Footer />
    	</Container>
    );
  }
}

export default HomePage;
