import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='main-section'>
        <Row>
          <Col xs='6' sm='4'>
            <img src='https://via.placeholder.com/150' />
            <h4>Learn From your community</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs='6' sm='4'>
            <img src='https://via.placeholder.com/150' />
            <h4>Share your talents with the world</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col sm='4'>
            <img src='https://via.placeholder.com/150' />
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
