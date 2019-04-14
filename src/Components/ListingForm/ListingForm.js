import React, { Component } from 'react';
import './ListingForm.css';
import axios from 'axios';
import serverUrl from '../constants';

export default class ListingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: undefined,
      availability: false,
      imgUrls: undefined,
      notes: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  onCheckChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.checked,
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
            <label htmlFor='availability'>Availability</label>
            <input
              type='checkbox'
              name='availability'
              onChange={this.onCheckChange}
              className='form-control'
              checked={this.state.availability}
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
