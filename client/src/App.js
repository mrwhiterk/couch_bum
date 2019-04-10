import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import Listings from './Components/Listings/Listings';
import Listing from './Components/Listing/Listing';
import axios from 'axios';
import serverUrl from './Components/constants';

import LogInForm from './Components/LogInForm/LogInForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      email: '',
      password: '',
      username: '',
      isLoggedIn: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {
    console.log('signup');
    e.preventDefault();
    axios
      .post(serverUrl + '/users/signup', {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    localStorage.clear();
    this.props.history.push('/users/login');
  }

  handleLogIn(e) {
    console.log('login');
    e.preventDefault();
    axios
      .post(serverUrl + '/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <Link to='/'>
            <NavbarBrand>Couch Bum</NavbarBrand>
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {this.state.isLoggedIn === true && (
                <NavItem>
                  <Link to='/Listings'>
                    <NavLink>Listings</NavLink>
                  </Link>
                </NavItem>
              )}
              {this.state.isLoggedIn === true && (
                <NavItem>
                  <NavLink href='#'>Travelers</NavLink>
                </NavItem>
              )}
              {this.state.isLoggedIn === true && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
              <div className='nav-button'>
                {this.state.isLoggedIn === false && (
                  <Link to='/users/login'>
                    <h3> Log In </h3>
                  </Link>
                )}
              </div>
              <div className='nav-button'>
                {this.state.isLoggedIn === true && (
                  <Link to='/users/login' onClick={this.handleLogOut}>
                    <h3> Log Out </h3>
                  </Link>
                )}
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route
            path='/'
            exact
            render={props => (
              <Home {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path='/Listings'
            exact
            render={props => (
              <Listings {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path='/Listing/:id'
            exact
            render={props => (
              <Listing {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path='/users/signup'
            render={props => (
              <SignUpForm
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            path='/users/login'
            render={props => (
              <LogInForm
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
