import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Link } from 'react-router-dom';
import './UserInfo.css';
import { Button } from 'reactstrap';

import {
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Card,
  CardHeader,
} from 'reactstrap';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
      searchTerm: '',
    };

    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    axios
      .get(serverUrl + '/users/getUserInfo/' + localStorage.id)
      .then(res => {
        this.setState({ userInfo: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.userInfo) {
      return <div>Loading</div>;
    } else {
      const { username, email, bio, image } = this.state.userInfo;
      return (
        <div>
          <h2>UserInfo</h2>
          <Card>
            <CardHeader>Listing Info</CardHeader>
            <CardBody>
              <CardTitle>
                <h3>{username}</h3>
              </CardTitle>
              <CardText>
                <Row>
                  <Col>
                    <h4>email</h4> {email}
                  </Col>
                  <Col>
                    <h4>bio</h4> {bio}
                  </Col>
                  <Col>
                    <h4>profile pic</h4>
                    <img src={image} />
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}
