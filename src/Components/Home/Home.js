import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './Home.css';

import { Link } from 'react-router-dom';

import pic1 from '../../assets/couchbum1.jpg';
import pic2 from '../../assets/couchbum2.jpg';
import pic3 from '../../assets/couchbum3.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='main-section'>
        <Row>
          <Col>
            <h3>
              Welcome to Couchbum, a place where you can travel and share your
              passion for free.
            </h3>
            <p>
              Getting Started: Head over to 'MyInfo > Profile' and update your
              profile. You are already a <Link to='/travelers'>traveler</Link>{' '}
              when you signup. When you post your first{' '}
              <Link to='/listings'>listing</Link>, you become a host
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs='6' sm='4'>
            <img src={pic2} alt='' height='200px' />
            <h4>Learn From your community</h4>
            <p>
              Learn valuable skills from people rather than a book or video. Or
              maybe get a service done from a skilled individual while assisting
              them on their adventure.
            </p>
          </Col>
          <Col xs='6' sm='4'>
            <img src={pic3} alt='' height='200px' />
            <h4>Share your talents with the world</h4>
            <p>
              Share your passion, hardwork, and creativity to find accommadation
              across the world. Promote yourself while traveling cheaply and
              make friends along the way.
            </p>
          </Col>
          <Col sm='4'>
            <img src={pic1} alt='' height='200px' />
            <h4>Explore something different</h4>
            <p>
              We beleive that creating a platform where people can exchange
              services outside the traditional capitalist system can lead to
              interesting collaborations. We aim to enable users the opportunity
              to grow their network and conciousness through travel.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
