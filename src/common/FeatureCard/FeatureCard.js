import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Button, Row } from 'reactstrap';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

/**
 * The feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */
Modal.setAppElement('#root')
class FeatureCard extends React.Component {


    state = {
        modalIsOpen: false
    }
    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
        // console.log(this.state)
    }

    render(){
        return (
            <Card className="col-md-4 col-lg-3 shadow-sm" style={{ margin: "2%"}}>

                <div className="container" style={{paddingTop: "10%",paddingLeft: "5%",paddingRight: "5%",paddingBottom: "5%"}}>

                    <div className="text-center ">

                        <Container >
                            <img onClick={this.openModal} src={this.props.img} style={{cursor: 'pointer',maxWidth:'100%'}} />
                            <Modal
                              isOpen={this.state.modalIsOpen}

                              onRequestClose={this.closeModal}
                              style={customStyles}
                              contentLabel="Image Modal"
                            >
                                <img style={{height:'60vh',width:'50vw',display:'block'}} src={this.props.img} />
                                <Button color="warning" onClick={this.closeModal}>close</Button>
                            </Modal>
                        </Container>

                    </div>

                    <div className="text-center" style={{marginTop: "2%"}}>
                        <Container style={{ color:'#5C5C5C', fontSize:'3.2vw', fontWeight:'600',fontStyle:'Montserrat',fontSize:'1.6vw'}}>
                            {this.props.name}
                        </Container>

                    </div>

                    <hr/>

                    <div className="text-center" style={{marginTop: "5%"}}>
                        <Container>
                            <Row style={{justifyContent:'center', flexWrap:'wrap'}}>
                                <Button onClick={()=>this.props.onClick("add",this.props.name)} style={{borderColor:'#EDA500' ,backgroundColor:'#EDA500',marginTop: "5%", marginLeft:'5%',fontSize:'12px'}} color="primary">ADD TO CART</Button>
                                <Button onClick={()=>this.props.onClick("remove",this.props.name)} style={{borderColor:'#2F2D5D' ,backgroundColor:'#2F2D5D',marginTop: "5%",marginLeft:'5%',fontSize:'12px'}} color="danger">REMOVE</Button>
                            </Row>
                        </Container>

                    </div>
                </div>

            </Card>
        );
    }

}


export default FeatureCard;
