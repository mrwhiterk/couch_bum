import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Link } from 'react-router-dom';
import './HomeListings';

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Alert,
  Row,
  Col,
} from 'reactstrap';

export default class HomeListings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeListings: null,
      searchTerm: '',
    };

    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios
      .get(serverUrl + '/users/getListings/' + localStorage.id)
      .then(res => {
        this.setState({ homeListings: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.homeListings) {
      return <div>Loading</div>;
    } else if (this.state.homeListings.length === 0) {
      return (
        <div>
          <h3>No Listings</h3>
          <Link to={`/listingForm`}>
            <Button color='primary'>Add</Button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2>My Listings</h2>
          <ListGroup>
            {this.state.homeListings.map((listing, i) => {
              let { id, address, availability, notes, imgUrls } = listing;
              return (
                <ListGroupItem key={i}>
                  <Card>
                    <CardHeader>Listing Info</CardHeader>
                    <CardBody>
                      <CardTitle>
                        <h3>{address}</h3>
                      </CardTitle>
                      <CardText>
                        <div>
                          {availability ? (
                            <Alert color='success'>Available</Alert>
                          ) : (
                            <Alert color='danger'>Unavailable</Alert>
                          )}
                        </div>
                        <div>
                          <h4>Notes</h4> {notes}
                        </div>
                        <div>
                          <h4>Images</h4>
                          <Row>
                            {imgUrls.map((imageUrl, i) => (
                              <Col xs='auto' key={i}>
                                <img src={imageUrl} alt={i} height='150px' />
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </CardText>
                      <Row>
                        <Col>
                          <Link to={`/listingEditForm/${listing._id}`}>
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Link to={`/removeListingFromUser/${listing._id}`}>
                            Remove
                          </Link>
                        </Col>
                        <Col />
                        <Col />
                        <Col />
                      </Row>
                    </CardBody>
                  </Card>
                </ListGroupItem>
              );
            })}
          </ListGroup>
          <Link to={`/listingForm`}>
            <Button color='primary'>Add</Button>
          </Link>
        </div>
      );
    }
  }
}
