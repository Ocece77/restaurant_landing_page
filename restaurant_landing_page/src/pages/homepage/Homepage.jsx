import { Container , Row , Col } from "react-bootstrap";
import img from '../../assets/img/sujet.png'
import './homepage.scss';



const Homepage = () =>{
  return(
  <Container  className='h-100 '>
    <Row className='h-100'>

      <Col sm={12} lg={7} className="d-flex align-items-center position-relative">
         <Col className="position-absolute z-1 h-100 hidden-div"> </Col>

           <Col>
             <h1 className="fw-bolder mt-5">cotton <span style={{color : "var(--color-lighterpink)"}}>candy</span></h1>
           </Col>
        </Col>
        
        <Col md={12} lg={5} className="z-2 d-flex justify-content-md-center pt-5 opening" >
          <img src={img} alt="cottoncandyimage"/>
        </Col>
      
    </Row>
  </Container>
  )
}

export default Homepage;