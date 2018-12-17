import React, { Component } from 'react';
import { Container, Row, Button} from 'reactstrap';
import { NavbarHeader } from '../../common/NavbarHeader/NavbarHeader';
import { Footer } from '../../common/Footer/Footer';


class App extends Component {
  render() {
    return (
		<Container fluid style={{padding:0,minHeight:'100vh'}}>
			<NavbarHeader position="fixed"/>
			<Container fluid style={{backgroundImage:'url("/img/about.jpg")', backgroundSize:'cover',height:'60vw',paddingTop:'70px'}}>
			</Container>
			<Container fluid>
				<Row style={{fontSize:'3vw',fontWeight:600,justifyContent:'center',paddingTop:'8%'}}>
					<span >TARA</span>
				</Row>
				<Row style={{fontSize:'1.5vw',padding:'4%'}}>
					Tara, a Star, symbolizes Hope. A Hope to achieve the heights of
					success. This is a bead craft project nurtured by The Ismailia
					Helping Society to promote the economic empowerment of women of
					the rural areas. Initiated in the villages of Saurashtra in Gujarat,
					this project is aimed at utilizing the traditional skills and art of
					rural women and transforming into contemporary art. “Weavers of
					Magic” as quoted by the world renowned artist S.H. Raza, these
					women have an inherent talent in bead craft and the Ismailia
					Helping Society nurtures that talent &amp; enhances their skills by
					imparting training to them. The exquisite products crafted by these
					women artisans are tremendously appreciated and have a huge
					demand in the fashion industry. 
					Ismailia Helping Society also provides these women artisans with
					market support by helping them display their craft in Exhibitions,
					Fairs and Sales. The project in keeping its mandate supports women
					to become second earners in the family, thereby improving the
					quality of their lives.
					Training workshops are held at regular intervals to upgrade their
					talent and impart new skills to them so as to enable them to stay
					updated with the changing market trends. 
					Through its various projects, these women of the Ismailia Helping
					Society family thrive in their new found independence and
					confidence. Our projects not only make them economically
					empowered but also boost their self esteem and morale and gain
					them respect and honour as active income generating members
					contributing to their families and society at large.
				</Row>
			</Container>
			<Container fluid>
				<Row style={{fontSize:'3vw',fontWeight:600,justifyContent:'center',paddingTop:'8%'}}>
					<span>HISTORY OF IHS</span>
				</Row>
				<Row style={{fontSize:'1.5vw',padding:'4%'}}>
					Ismailia Helping Society (IHS) believes in the empowerment of women
					through economic and social development.
					IHS was established in the year 1936 by a group of visionaries and
					social thinkers of the community. It is registered as a non profit and
					non government organization under the Public Trust Act of 1952. Since
					its inception IHS has pioneered several projects such as Cooking and
					Tailoring Classes, Apni Dukan, Family Welfare Program, distribution of
					milk , Balwadi and Feeding Programme. The organization works
					directly with its beneficiaries with the help of volunteers and
					professional social workers.
					Our beloved Sir Sultan Mohammed Shah Aga Khan was so pleased to
					learn about the concept of the society that he gave the Society a
					premise in Darkhana Jamatkhana to open up a kitchenette.
					In 1968 IHS initiated a Sponsorship Programme that provided
					scholarships for the education of the children. This programme was
					later supported by the Fosterian Children Universal Society (FOCUS)
					Canada and is currently spearheaded by Aga Khan Social Welfare
					Board for India.
					In its seventieth year, the Ismailia Heping Society took a step closer to
					working with the Aga Khan Development Network by signing a
					Memorandum of Understanding (MOU) with the Women’s Activities
					Portfolio (WAP) of His Highness Prince Aga Khan Shia Ismaili Council
					for India to provide a legal umbrella to its partner in various projects.
					The Society is also the legal entity for the Fitness Centre Oxygen- The
					essence of life which is located at a premises owned by Muniwar Abad
					Charitable Trust in Pune. The Society monitors the accounts of the
					centre through the annual audited accounts that is received from Aga
					Youth nand Sports Board for India.
					In the recent years the Society plays a significant role in the economic
					empowerment of the women. It enables the women to engage in
					income generation activities through skill development. The activities
					are designed to impact the holistic development of the women, youth
					and children with emphasis on health and education.
				</Row>
			</Container>
			<Footer />
		</Container>
    );
  }
}

export default App;
