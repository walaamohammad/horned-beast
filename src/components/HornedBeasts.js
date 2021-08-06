import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
class HornedBeasts extends Component {
    constructor() {
        super();
        this.state = {
            click: 0,
        
        }
    }
    riseBeats = () => {

        this.setState({
            click: this.state.click + 1
        })
    }
    clickButton=() =>{
let data={        
       title:this.props.title,
           image_url :this.props.image_url,
          description:this.props.description,

        }
        this.props.showModal(data)
    }
    render() {

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"
                        src={this.props.image_url}
                        alt={this.props.title}
                        onClick={() => { this.setState({modalDisplay: true }) }} />

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { this.riseBeats() }} >{this.state.click}</Button>
                        <Button variant="primary" onClick={() => { this.clickButton() }} >click me</Button>
                    </Card.Body>
                </Card>
              
            </>
        )
    }
}

export default HornedBeasts;
