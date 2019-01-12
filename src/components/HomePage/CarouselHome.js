import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Container, Row
} from 'reactstrap';

const items = [
	{
		src:'img/Necklaces/1.jpg',
		altText: 'Necklaces',
		caption: 'Necklaces',
		text: <div><span>Find the best hand made Necklaces on our </span><Link to="/products" style={{fontWeight:600,color:'blue'}}>products page</Link></div>
	},
	{
		src:'img/Batwas/1.jpg',
		altText: 'Batwas',
		caption: 'Batwas',
		text: <div><span>Find the best hand made Batwas on our </span><Link to="/products" style={{fontWeight:600,color:'blue'}}>products page</Link></div>
	},
	{
		src:'img/Tablewear/1.jpg',
		altText: 'Tablewear',
		caption: 'Tablewear',
		text: <div><span>Find the best hand made Tablewear on our </span><Link to="/products" style={{fontWeight:600,color:'blue'}}>products page</Link></div>
	},
	{
		src:'img/Clutch/1.jpg',
		altText: 'Clutches',
		caption: 'Clutches',
		text: <div><span>Find the best hand made Clutches on our </span><Link to="/products" style={{fontWeight:600,color:'blue'}}>products page</Link></div>
	},
	{
		src:'img/Shawls/1.jpg',
		altText: 'Shawls',
		caption: 'Shawls',
		text: <div><span>Find the best hand made Shawls on our </span><Link to="/products" style={{fontWeight:600,color:'blue'}}>products page</Link></div>
	},
];

class CarouselHome extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 1 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
					style={{justifyContent:'center'}}
				>
				<Container fluid style={{backgroundColor:'#fadadd'}}>
				<Row style={{justifyContent:'center',width:'100%',padding:0,margin:0}}>
					<Card style={{width:'40%',padding:'2vw',margin:'3vw',justifyContent:'center',backgroundColor:'#fadadd',border:'none'}}>
						<CardImg top alt={item.altText} src={item.src} style={{width:"30vw",height:'30vw',alignSelf:'center' }}/>
						<CardBody style={{textAlign:'center',fontSize:'2vw'}}>
							<CardText style={{fontWeight:600}}>{item.text}</CardText>
							
						</CardBody>
					</Card>
				</Row>
				</Container>
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}
				style={{color:'#fadadd'}}
			>
				<CarouselIndicators style={{color:'black',justifyContent:'center'}} items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
				{slides}
				<CarouselControl style={{color:'black'}} direction="prev" directionText="Previous" onClickHandler={this.previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			</Carousel>
		);
	}
}


export default CarouselHome;