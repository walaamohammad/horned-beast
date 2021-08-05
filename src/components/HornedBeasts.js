import React, { Component } from 'react';
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

export default HornedBeasts
