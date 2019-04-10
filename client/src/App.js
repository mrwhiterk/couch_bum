import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import Listings from './Components/Listings/Listings';
import Listing from './Components/Listing/Listing';
import TravelerList from './Components/TravelerList/TravelerList';
import Traveler from './Components/Traveler/Traveler';
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
      userDetails: undefined,
      isLoggedIn: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getUserData() {
    axios
      .get(serverUrl + '/users/' + localStorage.id)
      .then(res => {
        this.setState({ userDetails: res.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
      this.getUserData();
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
        localStorage.id = response.data.id;
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.getUserData();
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
    this.setState({ userData: undefined });
    localStorage.clear();
    this.props.history.push('/users/login');
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.id = response.data.id;
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.getUserData();
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
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
                  <Link to='/Travelers'>
                    <NavLink>Travelers</NavLink>
                  </Link>
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

              {this.state.isLoggedIn === false && (
                <NavItem>
                  <Link to='/users/signup'>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              )}
              {this.state.isLoggedIn === false && (
                <NavItem>
                  <Link to='/users/login'>
                    <NavLink>Login</NavLink>
                  </Link>
                </NavItem>
              )}
              {this.state.userDetails && this.state.isLoggedIn === true && (
                <NavItem>
                  <NavLink>Welcome, {this.state.userDetails.username}</NavLink>
                </NavItem>
              )}
              {this.state.isLoggedIn === true && (
                <NavItem>
                  <Link to='/users/login' onClick={this.handleLogOut}>
                    <NavLink>Logout</NavLink>
                  </Link>
                </NavItem>
              )}
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
            path='/Travelers'
            exact
            render={props => (
              <TravelerList {...props} isLoggedIn={this.state.isLoggedIn} />
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
            path='/Traveler/:id'
            exact
            render={props => (
              <Traveler {...props} isLoggedIn={this.state.isLoggedIn} />
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
