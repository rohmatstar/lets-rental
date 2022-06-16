import React from 'react';
import { Navbar, Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const logo = "./../img/logo.png";
const cart = "./../img/cart.png";
const item = 0;

function Header(){
    return (
        <Navbar fixed="top" expand="lg" className="navbar-custom py-4">
          <Container fluid className="d-block" style={{margin: "0 60px"}}>
            <Row className="align-items-center">
              <Col md={3}>
                <Navbar.Brand href="#home">
                  <Link style={{textDecoration: "none", color: "inherit"}} to={'/homepage'}>
                    <img className="logo" src={logo}/>Lets Rental
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col md={5} className="relative items-align-center">
                <input
                  type="search"
                  className="form-control input-lg"
                  placeholder="Search Car"
                />
                <button type="submit" className="btn btn-primary btn-relative">
                  Search
                </button>
              </Col>
              <Col md={4} className="text-end text-white">
                <Link to={'/cart'} className="relative">
                  <img className="icon me-5" src={cart}/><Badge className="badge" bg="danger">{item}</Badge>
                </Link>
                <div className="d-inline border-left py-2 me-4"></div>
                <Link to={'/signup'}>
                  <button type="button" className="btn btn-text text-white fw-bold btn-lg me-3">
                    Sign Up
                  </button>
                </Link>
                <Link to={'/login'}>
                  <button type="button" className="btn btn-light text-primary fw-bold btn-lg">
                    Login
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
    )
}

export default Header;