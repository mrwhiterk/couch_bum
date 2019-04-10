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

export default class Traveler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      traveler: undefined,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(serverUrl + '/users/' + id)
      .then(res => {
        this.setState({ traveler: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.traveler) {
      return <div>Loading</div>;
    } else {
      const { username, email, bio, image, skills } = this.state.traveler;

      return (
        <div>
          <Card>
            <CardHeader>Traveler Info</CardHeader>
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
                <div>
                  <img src={image} alt='profile pic' />
                </div>
                <div>
                  <h4>Skills</h4>
                  {skills.map((skill, i) => (
                    <p key={i}>{skill.name}</p>
                  ))}
                </div>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}
