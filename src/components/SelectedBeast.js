import React, { Component } from 'react'
import { Modal,Button } from 'react-bootstrap/';

 class SelectedBeast extends Component {
  render() {
    return (
      <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <img src={this.props.imgurl} alt={this.props.title}/>
        <Modal.Text>
        {this.props.description}
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