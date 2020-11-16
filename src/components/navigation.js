import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Icon } from "rsuite";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <div className='Nav' style={{ marginTop: "15px", marginBottom: "15px" }}>
        <Nav>
          <Link to='/'>
            <Nav.Item icon={<Icon icon='home' />}>Home</Nav.Item>
          </Link>

          <Link to='/trends'>
            <Nav.Item icon={<Icon icon='trend' />}>Trending</Nav.Item>
          </Link>

          <Link to='/search'>
            <Nav.Item icon={<Icon icon='search' />}>Search</Nav.Item>
          </Link>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
