import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';

class Main extends Component {
  render() {

    return (
      <div>
        <Row>
          {
            this.props.data.map(item => {
              return (

                < HornedBeasts
                key={item.title}
                  title={item.title}
                  image_url={item.image_url}
                  description={item.description}
                  keyword={item.keyword}
                  horns={item.horns}
                  showModal={this.props.selectedModal}
                />
              )
            })
          }
        </Row>
      </div>
    )
  }
}

export default Main;

