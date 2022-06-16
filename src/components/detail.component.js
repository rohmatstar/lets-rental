import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* PARTIALS */
import Header from './partials/header.partials';
import Footer from './partials/footer.partials';

/* Components */
const mobilHonda = "./../img/mobil-honda.jpg";

function DetailOfProduct(){
    return(
        <Row className="product-detail" style={{margin: "100px 60px", marginTop: "150px", marginBottom: "60px"}}>
            <Col md={4}>
                <img className="product-img" src={mobilHonda} alt="Honda Brio"/>
            </Col>
            <Col>
                <h1 className="mb-5 fs-1 fw-bold text-secondary">Honda Brio</h1>
                <h3 className="text-primary fw-bold fs-2">Rp 350.000</h3>
            </Col>
            <Col>
                <div className="fw-bold fs-4 text-secondary d-inline-block">Days</div>
                <button className="btn btn-light py-0 px-3 bg-transparent border-0 fs-3 text-secondary fw-bold" style={{marginTop: "-8px", marginLeft: "10px"}}>-</button>
                <input className="form-control d-inline border-0 bg-transparent fs-5 text-primary fw-bold text-center" style={{width: "40px"}} value={1}/>
                <button className="btn btn-light py-0 px-3 bg-transparent border-0 fs-3 text-secondary fw-bold" style={{marginTop: "-8px"}}>+</button>
                
                <div className="mt-4">
                    <div className="fw-bold fs-4 text-secondary d-inline-block">Total Rent</div>
                    <input className="form-control d-inline border-0 bg-transparent fs-4 text-secondary fw-bold text-center" style={{width: "200px"}} value={"Rp 700.000"}/>
                </div>

                <div className="mt-4">
                <button className="btn bg-primary text-white fs-4 fw-bold py-3 btn-block" style={{width: "70%"}}>Add to Chart</button>
                <button className="btn mt-3 test-primary text-primary border-primary fs-4 fw-bold py-3 btn-block" style={{width: "70%"}}>Rent Now</button>
                </div>
            </Col>
        </Row>
    )
}
function Description(){
    return(
        <Row style={{margin: "40px 60px"}}>
            <Col>
                <div className="h3 mb-4 fw-bold text-dark">Detail</div>
                <div className="mb-4">
                    <div className="d-inline h3 text-dark">Type: </div>
                    <div className="d-inline h3 fw-bold text-dark">Honda</div>
                </div>
                <div className="mb-5">
                    <div className="d-inline h3 text-dark">Years: </div>
                    <div className="d-inline h3 fw-bold text-dark">2016</div>
                </div>
                <div className="mb-4">
                    <p className="h3 fw-normal" style={{lineHeight: "30px"}}>
                    Honda Brio adalah mobil hatchback yang banyak diminati masyarakat indonesia karena masuk kategori mobil LCGC yang mana harga terjangkau dan irit bensin
                    </p>
                </div>
                <div className="mb-4 mt-5 border-top border-secondary"></div>
            </Col>
        </Row>
    )
}
function Recommended() {
    return (
      <Container fluid className="" style={{ padding: '0 80px', marginBottom: "140px" }}>
        <Row className="bg-primary panel-category px-4">
          <Col className="col-12 pb-4">
            <h2 className="text-white fw-bold">Recommended</h2>
          </Col>
          
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/1'}>
              <Card>
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="fw-bold text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="fw-bold">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/2'}>
              <Card>
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="fw-bold text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="fw-bold">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/3'}>
              <Card>
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="fw-bold text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="fw-bold">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/4'}>
              <Card>
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="fw-bold text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="fw-bold">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    );
}

function Detail(){
    return (
        <div>
            <Header/>
            <DetailOfProduct/>
            <Description/>
            <Recommended/>
            <Footer/>
        </div>
    )
}

export default Detail;