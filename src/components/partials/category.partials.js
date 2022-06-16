import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const honda = "./img/honda.png";
const toyota = "./img/toyota.png";
const mitsubishi = "./img/mitsubishi.png";
const bmw = "./img/bmw.png";

function GridCategory(){
    return (
        <div className="py-5" style={{marginLeft: "60px", marginRight: "60px"}}>
          <Container fluid>
            <Row>
              <Col className="col-auto">
                <Link style={{textDecoration: "none", color: "inherit"}} to={'../category/honda'}>
                  <div className="category-item">
                    <img
                        className="d-block w-100"
                        src={honda}
                        alt="Honda"
                    />
                  </div>
                </Link>
              </Col>
              <Col className="col-auto">
                <Link style={{textDecoration: "none", color: "inherit"}} to={'../category/toyota'}>
                  <div className="category-item">
                    <img
                        className="d-block w-100"
                        src={toyota}
                        alt="Toyota"
                    />
                  </div>
                </Link>
              </Col>
              <Col className="col-auto">
                <Link style={{textDecoration: "none", color: "inherit"}} to={'../category/mitsubishi'}>
                  <div className="category-item">
                    <img
                        className="d-block w-100"
                        src={mitsubishi}
                        alt="Mitsubishi"
                    />
                  </div>
                </Link>
              </Col>
              <Col className="col-auto">
                <Link style={{textDecoration: "none", color: "inherit"}} to={'../category/bmw'}>
                  <div className="category-item">
                    <img
                        className="d-block w-100"
                        src={bmw}
                        alt="BMW"
                    />
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default GridCategory;