import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import './side-menu.css';
import { Link } from "react-router-dom";
import { Col, Navbar, Row } from "react-bootstrap";

export const SideMenuBar = (props) => {
    const [showNav, setShowNav] = useState();
    const token = localStorage.getItem("token");
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }
    let url="/logout";
    let element=<p>No handle exists for this user!</p>;
    if(loggedIn) element=<a href={url} className='btn btn-danger'>Logout</a>;
  

    const navItems = [
      <div className='custom-style row'>
        <Col><Link to="/signin" onClick={() => setShowNav(false)} >SignIn</Link></Col>
        <Col><Link to="/signup" onClick={() => setShowNav(false)} >SignUp</Link></Col>
      </div>,
      <Row>
        <Col>
          <Link to="/" onClick={() => setShowNav(false)} className="nav-link">Quality Dashboard</Link>
        </Col>
      </Row>,
      <Row>
        <Col>
          <Link to="/account-details" onClick={() => setShowNav(false)} className="nav-link">Configure CAR tool</Link>
        </Col>
      </Row>,
      <Row>
        <Col>
        <Link to="/account-details" onClick={() => setShowNav(false)} className="nav-link">Start Quality Check</Link>
        </Col>
      </Row>


    ];
  
    return (
        <Navbar bg="dark" expand="lg" className="side-menu">

          <MenuIcon onClick={() => setShowNav(true)} />{' '}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> {element} </Navbar.Text>
          </Navbar.Collapse>

          <SideNav
            showNav={showNav}
            title="CAR Tool"
            items={navItems}
            onHideNav={() => setShowNav(false)}
            titleStyle={{ backgroundColor: '#4CAF50' }}
            itemStyle={{ backgroundColor: '#fff' }}
            itemHoverStyle={{ backgroundColor: '#fff' }}
          />
        </Navbar>
    );
  };
  

export default SideMenuBar;