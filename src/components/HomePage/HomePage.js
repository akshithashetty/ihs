import React, { Component } from 'react';
import { Container, Row, Button} from 'reactstrap';
import NavbarHeader from '../../common/NavbarHeader/NavbarHeader';
import CarouselHome from './CarouselHome'

class HomePage extends Component {
  render() {
    return (
    	<Container fluid style={{padding:0}}>
    		<NavbarHeader />
    		<Container fluid style={{backgroundImage:'url("/img/pink.png")',height:'60vw',paddingTop:'8%',paddingBottom:'8%',paddingLeft:'16%',paddingRight:'16%'}}>
    			<Container style={{borderStyle:'solid',borderWidth:'3px',paddingBottom:'3%'}}>
    				<Row style={{paddingTop:'4%',paddingRight:'4%',paddingLeft:'4%',fontSize:'4vw',fontWeight:'600'}}>
    					<span>Something beyond just gifts, get the joy of giving back</span>
    				</Row>
    				<Row style={{paddingLeft:'4%',paddingRight:'4%',fontSize:'2vw',fontWeight:'600',fontStyle:'italic'}}>
    					<span>We are a foundation that helps women become self sufficient by helping them tailor their ideas.</span>
    				</Row>
    				<Row style={{justifyContent:'space-evenly',paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%',fontStyle:'italic'}}>
    					<img alt="thread" src="/img/thread.jpeg" style={{width:'12%',height:'12%'}}/>
    					<Button color="warning" style={{height:'5%',fontSize:'2vw',fontWeight:'600'}}>Know More</Button>
    					<Button color="warning" style={{height:'5%',fontSize:'2vw',fontWeight:'600'}}>View Products</Button>
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
					<span>What The Members of IHS Have To Say</span>
				</Row>
				<Row style={{justifyContent:'center'}}>
					<p>
						content
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
