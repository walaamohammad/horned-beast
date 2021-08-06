import React, { Component } from 'react';
class HornedBeasts extends Component {
    constructor() {
        super();
        this.state = {
            click: 0,
<<<<<<< HEAD
        
=======

>>>>>>> 311e419fadf30dc457067f103ed95406d2c7b743
        }
    }
    riseBeats = () => {

        this.setState({
            click: this.state.click + 1
        })
    }
<<<<<<< HEAD
    clickButton=() =>{
let data={        
       title:this.props.title,
           image_url :this.props.image_url,
          description:this.props.description,
=======

    openModal = () => {
        this.setState({ modalDisplay: true })
>>>>>>> 311e419fadf30dc457067f103ed95406d2c7b743

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
    render() {

        return (
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={()=>{this.riseBeats()}} 
                src={this.props.image_url} 
                alt ={this.props.title}
                 width='400px' height='400px'/>
                <p>{this.props.description}</p>
               <p>{this.state.click}</p>  
               <img src="https://www.pngfind.com/pngs/m/52-526310_free-vector-heart-icon-growing-heart-emoji-hd.png" width='40px' height='30px'/>

                  </div>

        )
    }
}

export default HornedBeasts;
