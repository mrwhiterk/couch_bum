import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../constants';
import { Link } from 'react-router-dom';
import './HomeSkillList';
import { Button } from 'reactstrap';

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
} from 'reactstrap';

export default class HomeSkillList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: null,
      searchTerm: '',
    };

    this.getSkills = this.getSkills.bind(this);
  }

  componentDidMount() {
    this.getSkills();
  }

  getSkills() {
    axios
      .get(serverUrl + '/users/getMySkills/' + localStorage.id)
      .then(res => {
        this.setState({ skillList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.skillList) {
      return <div>Loading</div>;
    } else if (this.state.skillList.length === 0) {
      return <h3>No Skills Listed</h3>;
    } else {
      return (
        <div>
          <h2>My Skills</h2>
          <ListGroup>
            {this.state.skillList.map((skill, i) => (
              <ListGroupItem key={i}>
                <Row>
                  <Col>
                    <ListGroupItemHeading>{skill.name}</ListGroupItemHeading>
                  </Col>
                  <Col />
                  <Col />
                  <Col>
                    <Link to={`/removeSkillFromUser/${skill._id}`}>Remove</Link>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
          <br />
          <Link to='/addListingToUser'>
            <Button color='primary'>Add</Button>
          </Link>
        </div>
      );
    }
  }
}
