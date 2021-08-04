import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';

class Main extends Component {
  render() {
    let arrayBeast = beastData;


    return (
      <div> 
        {
        arrayBeast.map(item=>{
          return(
            < HornedBeasts
            image_url={item.image_url}
              title={item.title}
              description={item.description}
  
            />
          )
         
        })
      }


      </div>
    )
  }
}

export default Main
