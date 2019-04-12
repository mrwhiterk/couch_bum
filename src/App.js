import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import Listings from './Components/Listings/Listings';
import Listing from './Components/Listing/Listing';
import HomeSkillList from './Components/HomeSkillList/HomeSkillList';
import HomeListings from './Components/HomeListings/HomeListings';
import TravelerList from './Components/TravelerList/TravelerList';
import SkillForm from './Components/SkillForm/SkillForm';
import ListingForm from './Components/ListingForm/ListingForm';
import ListingEditForm from './Components/ListingEditForm/ListingEditForm';
import Traveler from './Components/Traveler/Traveler';
import UserInfo from './Components/UserInfo/UserInfo';
import ProfileForm from './Components/ProfileForm/ProfileForm';
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
            <NavbarBrand id='app-title'>Couch Bum</NavbarBrand>
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {this.state.isLoggedIn === true && (
                <NavItem>
                  <Link to='/'>
                    <NavLink>Home</NavLink>
                  </Link>
                </NavItem>
              )}
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
                    My Info
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link to='/mySkills'>
                      <DropdownItem>Skills</DropdownItem>
                    </Link>
                    <Link to='/myListings'>
                      <DropdownItem>Listings</DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <Link to='/myInfo'>
                      <DropdownItem>Profile</DropdownItem>
                    </Link>
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
        <main>
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
            <Route
              path='/mySkills'
              render={props => (
                <HomeSkillList {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path='/myListings'
              render={props => (
                <HomeListings {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path='/myInfo'
              render={props => (
                <UserInfo {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path='/editProfile'
              render={props => (
                <ProfileForm {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path='/removeSkillFromUser/:id'
              render={props => <RemoveSkillFromUser {...props} />}
            />
            <Route
              path='/addSkillToUser'
              render={props => <SkillForm {...props} />}
            />
            <Route
              path='/removeListingFromUser/:id'
              render={props => <RemoveListingFromUser {...props} />}
            />
            <Route
              path='/listingForm/'
              render={props => <ListingForm {...props} />}
            />
            <Route
              path='/listingEditForm/:id'
              render={props => <ListingEditForm {...props} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

const RemoveSkillFromUser = props => {
  axios
    .put(
      serverUrl +
        '/users/removeSkillFromUser/' +
        localStorage.id +
        '/skill/' +
        props.match.params.id
    )
    .then(res => {
      props.history.push(`/mySkills`);
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

const RemoveListingFromUser = props => {
  axios
    .put(
      serverUrl +
        '/users/removeListingFromUser/' +
        localStorage.id +
        '/listing/' +
        props.match.params.id
    )
    .then(res => {
      props.history.push(`/myListings`);
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

export default withRouter(App);
