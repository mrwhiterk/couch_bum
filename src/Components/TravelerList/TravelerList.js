import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Link } from 'react-router-dom';

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
} from 'reactstrap';

export default class TravelerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travelerList: null,
      searchTerm: '',
    };

    this.getTravelers = this.getTravelers.bind(this);
  }

  componentDidMount() {
    this.getTravelers();
  }

  getTravelers() {
    axios
      .get(serverUrl + '/users/getTravelers')
      .then(res => {
        this.setState({ travelerList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.travelerList) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h2>Travelers</h2>
          <ListGroup>
            {this.state.travelerList.map((traveler, i) => (
              <ListGroupItem key={i}>
                <Row>
                  <Col>
                    <Link to={`/Traveler/${traveler._id}`}>
                      <ListGroupItemHeading>
                        {traveler.username}
                      </ListGroupItemHeading>
                    </Link>
                  </Col>
                  <Col>
                    <ListGroupItemText>{traveler.bio}</ListGroupItemText>
                  </Col>
                  <Col>
                    <img src={traveler.image} alt='' height='75px' />
                  </Col>
                  <Col>
                    <ListGroupItemText>
                      {traveler.skills[0] && traveler.skills[0].name}{' '}
                    </ListGroupItemText>
                    <ListGroupItemText>
                      {' '}
                      {traveler.skills[1] && traveler.skills[1].name}{' '}
                    </ListGroupItemText>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      );
    }
  }
}
