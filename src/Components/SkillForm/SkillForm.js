import React, { Component } from 'react';
import './SkillForm.css';
import axios from 'axios';
import serverUrl from '../constants';

export default class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateProfile() {
    axios
      .put(serverUrl + '/users/addSkillToUser/' + localStorage.id, this.state)
      .finally(() => {
        this.props.history.push(`/mySkills`);
        window.location.reload();
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.updateProfile();
  }

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <h1>Update Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.name}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
