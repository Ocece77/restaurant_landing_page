import { Container , Row , Col , Form , Button } from "react-bootstrap";
import './contact.scss';

const Contact = ()=>{
return(
  <Container className="mt-5 h-100 ">
    <Row className="bg-light rounded h-100 p-4">
      <Col sm={12} md={6}>
        <Col className="mb-2 pb-3">
        <h2 className="fw-bold" style={{color : 'var(--color-lightblue) '}} >Adresse</h2>
        </Col>
        
          <Col>
          <iframe width="100%" height="200px" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Disneyland%20Paris,%20Bd%20de%20Parc,%2077700%20Coupvray+(Disneyland%20Paris)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
          <address className="fw-bold"><em style={{color : 'var(--color-lightblue) '}}>Disneyland Paris, Bd de Parc, 77700 Coupvray</em></address>
          <p className="fw-bold">Opening : everyday - 9 am to 7 pm</p>
          </Col>
      </Col>

      <Col  sm={12} md={6}>
        <Col className="mb-2 pb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We&apos;ll response with to this adress
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="textArea">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>

              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check type="checkbox" label="You want to receive the newsleter" />
              </Form.Group>

              <Button  type="submit">
                Submit
               </Button>
        </Form>
          
          </Col>
      </Col>
    </Row>
  </Container>
)

}

export default Contact;