import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts
