import React, { Component } from 'react';
import './ProfileForm.css';
import axios from 'axios';
import serverUrl from '../constants';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      bio: '',
      image: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(serverUrl + '/users/getEditFields/' + localStorage.id)
      .then(res => {
        this.setState({ ...res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateProfile() {
    axios
      .put(serverUrl + '/users/updateProfile/' + localStorage.id, this.state)
      .then(function(response) {})
      .finally(() => {
        this.props.history.push(`/myInfo`);
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.updateProfile();
  }

  render() {
    return (
      <div className='container'>
        <h1>Update Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.username}
            />
            <label htmlFor='bio'>Bio</label>
            <input
              type='text'
              name='bio'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.bio}
            />
            <label htmlFor='image'>Image</label>
            <input
              type='text'
              name='image'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.image}
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
