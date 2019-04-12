import React, { Component } from 'react';
import './ListingForm.css';
import axios from 'axios';
import serverUrl from '../constants';

export default class ListingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: undefined,
      availability: undefined,
      imgUrls: undefined,
      notes: undefined,
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
      .post(
        serverUrl + '/users/addListingToUser/' + localStorage.id,
        this.state
      )
      .finally(() => {
        this.props.history.push(`/myListings`);
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
        <h1>Add Listing</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.address}
            />
            <label htmlFor='availability'>
              Availability (type 'yes' or 'no')
            </label>
            <input
              type='text'
              name='availability'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.availability}
            />
            <label htmlFor='imgUrls'>Images (separate with space)</label>
            <input
              type='text'
              name='imgUrls'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.imgUrls}
            />
            <label htmlFor='notes'>Notes</label>
            <input
              type='text'
              name='notes'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.notes}
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
