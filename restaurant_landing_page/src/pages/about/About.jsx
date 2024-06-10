import { Container , Row , Col } from "react-bootstrap";
import cottonCandyFloss from "../../assets/img/cottonfloss.jpeg";
import './about.scss';

const About = ()=>{
return(
  <Container className="mt-5 h-100 ">
    <Row className="bg-light rounded h-100">
      <Col >
        <Col className="mb-2  py-4">
        <h1 className="title-about-us fw-bolder text-dark">About <span>Us</span> </h1>
        </Col>

        <Col className=" mt-3 cotton-candy-img d-flex justify-content-center mb-4">
          <img src={cottonCandyFloss} className="rounded " alt="candies" />
        </Col>
        
          <Col>
           <p className="text-center text-muted">There&apos;s nothing much to say about us, just visit my github page <br /> <a className="fw-bold" style={{color : 'var(--color-blue) '}} href='https://github.com/ocece77' target="_blank"> my github page</a></p>
          </Col>
      </Col>
    </Row>
  </Container>
)

}

export default About;