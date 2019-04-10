import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Link } from 'react-router-dom';

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
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
        <ListGroup>
          {this.state.travelerList.map((traveler, i) => (
            <ListGroupItem key={i}>
              <Link to={`/listing/${traveler._id}`}>
                <ListGroupItemHeading>{traveler.username}</ListGroupItemHeading>
              </Link>
              <ListGroupItemText>{traveler.bio}</ListGroupItemText>
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }
  }
}
