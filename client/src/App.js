import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Link, Switch } from 'react-router-dom';
import Listings from './Components/Listings/Listings';

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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      email: '',
      password: '',
      isLoggedIn: false,
    };
    // this.handleInput = this.handleInput.bind(this);
    // this.handleSignUp = this.handleSignUp.bind(this);
    // this.handleLogOut = this.handleLogOut.bind(this);
    // this.handleLogIn = this.handleLogIn.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    // if (localStorage.token) {
    //   this.setState({
    //     isLoggedIn: true,
    //   });
    // } else {
    //   this.setState({
    //     isLoggedIn: false,
    //   });
    // }
  }

  // handleInput(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  // handleLogOut() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     isLoggedIn: false,
  //   });
  //   localStorage.clear();
  //   this.props.history.push('/users/login');
  // }

  // handleLogIn(e) {
  //   e.preventDefault();
  //   axios
  //     .post(serverUrl + '/users/login', {
  //       email: this.state.email,
  //       password: this.state.password,
  //     })
  //     .then(response => {
  //       localStorage.token = response.data.token;
  //       this.setState({ isLoggedIn: true });
  //       this.props.history.push('/');
  //     })
  //     .catch(err => console.log(err));
  // }

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
              <NavItem>
                <Link to='/Listings'>
                  <NavLink>Listings</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Travelers</NavLink>
              </NavItem>
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
        </Switch>
      </div>
    );
  }
}
