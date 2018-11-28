import React, { Component } from 'react';
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
		src:'',
		altText: 'Slide 1',
		caption: 'Slide 1',
		text: 'it was a very good and helpful experience.'
	},
	{
		src:'/img/guitar.jpg',
		altText: 'Slide 2',
		caption: 'Slide 2',
		text: 'it was a very good and helpful experience.'
	},
	{
		src:'',
		altText: 'Slide 3',
		caption: 'Slide 3',
		text: 'it was a very good and helpful experience.'
	}
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
				<Container fluid style={{backgroundColor:'black'}}>
				<Row style={{justifyContent:'center',width:'100%',padding:0,margin:0}}>
					<Card color="primary" style={{width:'40%',padding:'2vw',margin:'3vw',justifyContent:'center'}}>
						<CardImg top alt={item.altText} src={item.src} style={{borderRadius:'50%',width:"15vw",height:'15vw',alignSelf:'center' }}/>
						<CardBody style={{textAlign:'center',fontSize:'2vw'}}>
							<CardTitle>{item.caption}</CardTitle>
							<CardText>{item.text}</CardText>
							
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
				style={{color:'black'}}
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