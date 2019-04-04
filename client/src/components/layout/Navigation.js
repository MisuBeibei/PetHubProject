import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Navigation extends React.Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">PetHub</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Adoption">Adoption</Nav.Link>
          </Nav>

          <Form inline>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/" className = "Loggedin">
              Logged in as:
              {user.name}</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
          </Form>
        </Navbar>
      </div>
    );
  }
}


Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);