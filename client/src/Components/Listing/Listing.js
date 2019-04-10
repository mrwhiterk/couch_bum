import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
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
  }

  render() {
    console.log('props', this.props.match.params);
    console.log('owner', this.state.listingOwner);
    if (!this.state.listingOwner) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
            {/* <CardFooter>Footer</CardFooter> */}
          </Card>
        </div>
      );
    }
  }
}
