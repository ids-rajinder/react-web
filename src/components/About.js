import React from 'react'
import { Button,Container,Row,Col} from 'react-bootstrap';
export const About = () => {
  return (
    <div>
      <section className="jumbotron text-center">
        <Container>
          <h1 className="jumbotron-heading">About Page</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <Button href="#" variant="primary my-2">Main call to action</Button> <Button href="#" variant="secondary my-2">Secondary action</Button>
          </p>
        </Container>
        </section>
        <div className="album py-5 bg-light">
        <Container>
          <Row>
            <Col md={4}>
              <div className="card mb-4 box-shadow">
                <img src="./images/pic.png" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button type="button" variant="btn btn-outline-secondary">View</Button> <Button type="button" variant="btn btn-outline-secondary">Edit</Button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4 box-shadow">
                <img src="./images/pic.png" />  
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4 box-shadow">
                <img src="./images/pic.png" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4 box-shadow">
                <img src="./images/pic.png" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4 box-shadow">
                <img src="./images/pic.png" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default About;