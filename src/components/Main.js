import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';
import { Col, Row} from 'react-bootstrap';

class Main extends Component {
  render() {
    let arrayBeast = beastData;
    return (
      <div>
        <Row>
          {
            arrayBeast.map((element ,index) => {
              return (
                <Col key='index'>
                  < HornedBeasts
                    image_url={element.image_url}
                    title={element.title}
                    description={element.description}
                    keyword={element.keyword}
                    horns={element.horns}
                  />

                </Col>



              )
            })
          }
        

        </Row>
      </div>
    )
  }
}

export default Main

