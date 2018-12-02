import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container} from 'reactstrap';


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
            </div>

        </Card>
    )

}


export default FeatureCard;