import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';
import { Link } from 'react-router-dom';

import CarouselHome from './CarouselHome'

class HomePage extends Component {
  render() {
    return (
    	<Container fluid style={{padding:0}}>
    		<NavbarHeader position=""/>
    		<Container fluid style={{backgroundImage:'url("/img/pink.png")',height:'60vw',paddingTop:'8%',paddingBottom:'8%',paddingLeft:'16%',paddingRight:'16%'}}>
    			<Container style={{borderStyle:'solid',borderWidth:'1vw',paddingBottom:'3%'}}>
    				<Row style={{paddingTop:'4%',paddingRight:'4%',paddingLeft:'4%',fontSize:'4vw',fontWeight:'600'}}>
    					<span>Something beyond just gifts, get the joy of giving back</span>
    				</Row>
    				<Row style={{paddingLeft:'4%',paddingRight:'4%',fontSize:'2vw',fontWeight:'600',fontStyle:'italic'}}>
    					<span>We are a foundation that helps women become self sufficient by helping them tailor their ideas.</span>
    				</Row>
    				<Row style={{justifyContent:'space-evenly',paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%',fontStyle:'italic'}}>
    					<img alt="thread" src="/img/thread1.png" style={{width:'12%',height:'12%'}}/>
    					<Link to="/about"><Button color="warning" style={{height:'5vw',fontSize:'2vw',fontWeight:'600'}}>Know More</Button></Link>
    					<Link to="/products"><Button color="warning" style={{height:'5vw',fontSize:'2vw',fontWeight:'600'}}>View Products</Button></Link>
    				</Row>

    			</Container>
    		</Container>
			<Container>
				<Row>
					<hr style={{border:'1px solid black',width:'30%'}} />
				</Row>
			</Container>
			<Container style={{padding:'2%'}}>
				<Row style={{justifyContent:'center',fontWeight:'600',fontSize:'3vw'}}>
					<span>What We Do</span>
				</Row>
				<Row style={{justifyContent:'center',paddingTop:'2%',fontSize:'1.5vw'}}>
					<p style={{fontWeight:600}}>
						The Ismailia Helping Society was established in 1936, by a group of visionaries and social thinkers of our community. IHS was  registered as an NGO in 1952. 
						The mission of  IHS- mentoring women by enhancing their economic status through improved occupational skills and business acumen. 
						The Society had two major programmes:<br/>
						1) Project Tara: the project was launched in 1995.  TARA - A Star, symbolised Hope. A Hope to achieve the heights of success. This is a beadcraft project nurtured by IHS to promote the economic empowerment of rural women of Saurashtra. The traditional skill and art of rural women is blended harmoniously with contemporary colour and design to provide handcrafted masterpieces. 
						<br/>2)Flavours: The Catering Programme was launched in 2009. It was started to promote enterprnership of women in the field of catering. Women with culinary skills are upgraded under this programme. 

					</p>
				</Row>
			</Container>
			<Container>
				<Row>
					<hr style={{border:'1px solid black',width:'30%'}} />
				</Row>
			</Container>
			<Container fluid style={{padding:'0%'}}>
				<CarouselHome />
			</Container>
    	</Container>
    );
  }
}

export default HomePage;
