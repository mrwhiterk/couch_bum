import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Row, Col, Alert } from 'reactstrap';

import {
  Card,
  Button,
  CardHeader,
  // CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

export default class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingOwner: undefined,
      listingDetails: undefined,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(serverUrl + '/users/getListingOwner/' + id)
      .then(res => {
        this.setState({ listingOwner: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(serverUrl + '/users/getUserListing/' + id)
      .then(res => {
        this.setState({ listingDetails: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.listingOwner || !this.state.listingDetails) {
      return <div>Loading</div>;
    } else {
      const { username, email, bio } = this.state.listingOwner;
      const {
        address,
        availability,
        notes,
        imgUrls,
      } = this.state.listingDetails;

      return (
        <div>
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
              <Button>Apply</Button>
            </CardBody>
            {/* <CardFooter>Footer</CardFooter> */}
          </Card>
          <Card>
            <CardHeader>Host Info</CardHeader>
            <CardBody>
              <CardTitle>
                <h3>{username}</h3>
              </CardTitle>
              <CardText>
                <div>
                  <h4>Bio</h4> {bio}
                </div>
                <div>
                  <h4>Email</h4> {email}
                </div>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}
