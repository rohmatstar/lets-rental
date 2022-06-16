import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const logoBlue = "./../img/logo-blue.png";

function Login(){
    return (
      <div style={{backgroundColor: "#f1f6ff"}}>
        <Container fluid>
        <Row style={{height: "100vh", background: "url('./../img/bg-login.png') center center no-repeat", backgroundSize: "50%"}} className="justify-content-center align-items-center">
            <Col md={3} style={{ marginTop: "-50px"}}>
              <h2 className="mb-5 text-primary text-center">
                <img className="logo" src={logoBlue}/>Lets Rental
              </h2>
              <Card className="border-0 px-3 py-3 shadow">
                <Card.Body>
                  <Row className="justify-content-between align-items-center">
                    <Col className="text-start">
                      <h2 className="text-secondary">Login</h2>
                    </Col>
                    <Col className="text-end">
                    <Link to="/signup" style={{textDecoration: "none"}}><h6 className="text-primary">Signup</h6></Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-start">
                      <label className="mb-1 mt-5">Nomor Telepon atau Email</label>
                      <input type="email" autoComplete="true" autoFocus="true" className="form-control input-lg" placeholder="Contoh: customer@letsrental.co.id"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-start">
                      <label className="mb-1 mt-3">Kata Sandi</label>
                      <input type="password" className="form-control input-lg" placeholder="Kata Sandi"/>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      {/* Hilangkan Komponen Link untuk membuat proses login */}
                      <Link to="/homepage">
                        <button className="btn btn-primary bg-primary border-0 fw-bold text-white btn-block w-100 py-2 fs-5">Masuk</button>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <button className="btn btn-light bg-transparent pe-0 fw-bold text-primary mt-4">Lupa Kata Sandi?</button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Login;