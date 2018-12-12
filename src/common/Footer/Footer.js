import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';


/**
 * The commoon footer Component containing links to the required pages.
 */

function Footer() {

    return (
        <Container fluid={true} style={{padding: 0}}>
            <Container fluid={true} style={{filter: 'brightness(80%)',backgroundColor: '#404040',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <Row style={{paddingTop:'3%',paddingBottom:'3%', paddingLeft  :'4%',color:'#fff',justifyContent:'sapce-between'}}>
                    <span style={{fontSize:'1.6vw',marginRight:'10%'}}>Phone: +91 22-23476453</span>
                    <span style={{fontSize:'1.6vw'}}>Email: tara.society1@gmail.com</span> 
                    <MediaQuery query="(min-device-width: 1224px)">
                    <Link  style={{marginLeft:'20%',color: 'inherit',opacity:1}} to="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"2x"} icon={faInstagram} style={{background: "#dd4b39",color: "white",width:'1em',height:'1em'}}/></Link>
                    </MediaQuery>   
                </Row>
            </Container>
        </Container>
    )

}


export {Footer}