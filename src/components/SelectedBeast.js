import React , { Component } from 'react';
import { Modal,Button } from 'react-bootstrap/';

 class SelectedBeast extends Component {
//    constructor(props){
//      super(props)
//      this.state={
// modalDisplay:false,
// SelectedBeast:{},
//      }

//    }
//    displayModalFun=(imageTitle)=>{
//      let SelectedBeast =  beastData.find(
//        item=>item.title===imageTitle

//      )
//      this.setState(
//        {
//          SelectedBeast:SelectedBeast,
//          modalDisplay=true,
//        }
//      )
//    }
  render() {

    return (
      <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <img src={this.props.SelectedBeast.image_url} alt={this.props.title}/>
        <Modal.Text>
        {this.props.SelectedBeast.description}
        </Modal.Text>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
}
export default SelectedBeast
