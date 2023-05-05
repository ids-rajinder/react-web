import React from 'react'
import { Button,Container,Row,Col} from 'react-bootstrap';
export const Home = () => {
  return (
    <div>
      <div className="text-center d-flex align-items-center justify-content-center blue-color flex-column vh-100">
        <img src="./images/logo-hero.png" width="90px" />
        <h1 className="my-4">Free Bootstrap Templates</h1>
        <p className="mb-4">We create clean, elegant and beautiful free website templates and themes using<br />
          Bootstrap, the most popular HTML, CSS & JavaScript framework</p>
          <Button variant="primary bg-blue-color rounded-1 border-0" size="lg">Browse Templates</Button>
      </div>
      <Container>
        <div className="card mb-3">
          <Row className="align-items-center">
            <Col md={4}>
              <img src="./images/Arsha-bootstrap-website-template-md.webp" style={{width:'100%'}}/>
            </Col>
            <Col md={8}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Button variant='outline-primary rounded-1'>Live Demo</Button> <Button variant='outline-primary rounded-1 '> Free Download </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="card mb-3">
          <Row className="align-items-center">
            <Col md={4}>
              <img src="./images/Arsha-bootstrap-website-template-md.webp" style={{width:'100%'}}/>
            </Col>
            <Col md={8}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Button variant='outline-primary rounded-1'>Live Demo</Button> <Button variant='outline-primary rounded-1 '> Free Download </Button>
              </div>
            </Col>
          </Row>
        </div>  
        <div className="card mb-3">
          <Row className="align-items-center">
            <Col md={4}>
              <img src="./images/Arsha-bootstrap-website-template-md.webp" style={{width:'100%'}}/>
            </Col>
            <Col md={8}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Button variant='outline-primary rounded-1'>Live Demo</Button> <Button variant='outline-primary rounded-1 '> Free Download </Button>
              </div>
            </Col>
          </Row>
        </div>  
      </Container>
    </div>
  )
}
// https://bootstrapmade.com/
export default Home;