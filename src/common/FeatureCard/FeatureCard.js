import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Button, Row } from 'reactstrap';


/**
 * The feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function FeatureCard(props) {


    return (
        <Card className="col-md-4 col-lg-3 shadow-sm" style={{margin: "2%"}}>

            <div className="container" style={{paddingTop: "10%",paddingLeft: "5%",paddingRight: "5%",paddingBottom: "7%"}}>

                <div className="text-center ">

                    <Container>
                        <img src={props.img} style={{maxWidth:'100%'}} />
                    </Container>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "5%"}}>
                    <Container>
                        {props.text}
                    </Container>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "5%"}}>
                    <Container>
                        <Row style={{justifyContent:'center', flexWrap:'wrap'}}>
                            <Button onClick={()=>props.onClick("add",props.name)} style={{marginTop: "5%", marginLeft:'5%'}} color="primary">Add to Cart</Button>
                            <Button onClick={()=>props.onClick("remove",props.name)} style={{marginTop: "5%",marginLeft:'5%'}} color="danger">Remove</Button>
                        </Row>
                    </Container>

                </div>
            </div>

        </Card>
    )

}


export default FeatureCard;