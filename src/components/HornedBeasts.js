import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast'
class HornedBeasts extends Component {
    constructor() {
        super();
        this.state = {
            click: 0,
            showModal : false,
        }
    }
    riseBeats = () => {

        this.setState({
            click: this.state.click + 1
        })
    }
    openModal = () => {
        this.setState({ showModal: true })

    }
    handleClose = () => {
        this.setState({ showModal: false })
    }

 

    render() {

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"
                        src={this.props.image_url}
                        alt={this.props.title}
                        onClick={() => {this.setState({ showModal: true }) }} />

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { this.riseBeats() }} >{this.state.click}</Button>
                    </Card.Body>
                </Card>
                <SelectedBeast
                    handleClose={this.handleClose}
                    show={this.state.showModal}
                    title={this.props.title}
                    image_url={this.props.image_url}
                    description={this.props.description}
                />
            </>
        )
    }
}

export default HornedBeasts
