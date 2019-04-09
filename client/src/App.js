import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button color='danger'>Danger!</Button>
      </div>
    );
  }
}

export default App;
