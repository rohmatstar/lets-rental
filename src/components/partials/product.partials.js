import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const mobilHonda = "./img/mobil-honda.jpg";

function CardProduct() {
    return (
      <Container fluid className="" style={{ padding: '0 80px', marginBottom: "140px" }}>
        <Row className="bg-primary panel-category px-4">
          <Col className="col-12 pb-4">
            <h2 className="text-white fw-bold">New Ready</h2>
          </Col>
          
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/1'}>
              <Card>{/* style={{ width: '18rem' }} */}
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/2'}>
              <Card>{/* style={{ width: '18rem' }} */}
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/3'}>
              <Card>{/* style={{ width: '18rem' }} */}
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3} className="px-3">
            <Link style={{textDecoration: "none", color: "inherit"}} to={'../product/4'}>
              <Card>{/* style={{ width: '18rem' }} */}
                  <Card.Img variant="top" src={mobilHonda} />
                  <Card.Body>
                    <Card.Title><h4 className="text-secondary">Honda</h4></Card.Title>
                    <Card.Text>
                      <h4 className="fw-normal">Honda Brio</h4>
                    </Card.Text>
                    <div className="categpry-footer">
                      <h4 className="fw-normal text-primary">2016</h4>
                      <h4 className="">Rp. 350.000</h4>
                    </div>  
                  </Card.Body>
              </Card>
            </Link>
          </Col>

        </Row>
      </Container>
    );
}

export default CardProduct;