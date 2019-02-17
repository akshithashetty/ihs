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
        <Container fluid style={{padding:0}}>
        <MediaQuery query="(max-device-width: 700px)">
            <Container fluid={true} style={{padding: 0,bottom:0,}}>
                <Container fluid={true} style={{backgroundColor: '#dfeef3',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <Row style={{paddingTop:'3%',paddingBottom:'3%', paddingLeft  :'4%',paddingRight:'30%',color:'#5C5C5C',justifyContent:'space-between'}}>
                        <span style={{fontSize:'1.5vw'}}>Phone: +91 22-23476453</span>
                        <span style={{fontSize:'1.5vw'}}>Email: tara.society1@gmail.com</span>
                        <span style={{fontSize:'1.5vw'}}>© 2019 Tara Foundation.</span>
                        {/*<MediaQuery query="(min-device-width: 1224px)">
                        <Link  style={{marginLeft:'20%',color: 'inherit',opacity:1}} to="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"2x"} icon={faInstagram} style={{background: "#dd4b39",color: "white",width:'1em',height:'1em'}}/></Link>
                        </MediaQuery>*/}
                    </Row>
                    <Row>
    					<hr style={{border:'2.5px solid #EDA500',width:'100%',paddingBottom:'0px',margin:0,}} />
    				</Row>
                </Container>
            </Container>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 700px)">
            <Container fluid={true} style={{padding: 0}}>
                <Container fluid={true} style={{backgroundColor: '#dfeef3',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <Row style={{paddingTop:'3%',paddingBottom:'3%', paddingLeft  :'4%',paddingRight:'30%',color:'#5C5C5C',justifyContent:'space-between'}}>
                        <span style={{fontSize:'1.2vw'}}>Phone: +91 22-23476453</span>
                        <span style={{fontSize:'1.2vw'}}>Email: tara.society1@gmail.com</span>
                        <span style={{fontSize:'1.2vw'}}>© 2019 Tara Foundation.</span>
                        {/*<MediaQuery query="(min-device-width: 1224px)">
                        <Link  style={{marginLeft:'20%',color: 'inherit',opacity:1}} to="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"2x"} icon={faInstagram} style={{background: "#dd4b39",color: "white",width:'1em',height:'1em'}}/></Link>
                        </MediaQuery>*/}
                    </Row>
                    <Row>
                        <hr style={{border:'2.5px solid #EDA500',width:'100%',paddingBottom:'0px',margin:0,}} />
                    </Row>
                </Container>
            </Container>
        </MediaQuery>
        </Container>
    )

}


export {Footer}
