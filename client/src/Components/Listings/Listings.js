import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';

export default class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: null,
      searchTerm: '',
    };

    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios
      .get(serverUrl + '/users/listings')
      .then(res => {
        this.setState({ listings: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.listings) {
      return <div>Loading</div>;
    } else {
      return (
        <ListGroup>
          {this.state.listings.map((listing, i) => (
            <ListGroupItem key={i}>
              <ListGroupItemHeading>{listing.address}</ListGroupItemHeading>
              <ListGroupItemText>{listing.notes}</ListGroupItemText>
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }
  }
}
