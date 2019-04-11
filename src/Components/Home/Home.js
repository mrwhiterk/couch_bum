import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './Home.css';

import pic1 from '../../assets/couchbum1.jpg';
import pic2 from '../../assets/couchbum2.jpg';
import pic3 from '../../assets/couchbum3.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='main-section'>
        <Row>
          <Col xs='6' sm='4'>
            <img src={pic2} alt='' height='200px' />
            <h4>Learn From your community</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs='6' sm='4'>
            <img src={pic3} alt='' height='200px' />
            <h4>Share your talents with the world</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col sm='4'>
            <img src={pic1} alt='' height='200px' />
            <h4>Explore something different</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
