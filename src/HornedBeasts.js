import React, { Component } from 'react'

 class HornedBeasts extends Component {
     constructor(){
         super();
         this.state={
             click:props.click
         }
     }
     riseBeats=(click)=>{
        
         this.state({
            click:this.state.click+1
         })
     }
    render() {

       
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt ={this.props.title} width='400px' height='400px'/>
                <p>{this.props.description}</p>
                <img onclick={()=>{this.riseBeats}} src="https://celebrant-reginasmall.com.au/wp-content/uploads/2014/12/heart-icon-300x261.png" width='30px' height='30px'/>
               <p>{this.state.click}</p> 
                  </div>
        )
    }
}

export default HornedBeasts
