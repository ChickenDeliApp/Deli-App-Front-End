import { Component } from "react";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
class HomePage extends Component {

    render() {

        const sampleReviews = []
        for (let index = 0; index < 5; index++) {
            sampleReviews.push(<Card className="w-75 mx-auto mb-4">
                <Card.Img style={{maxHeight: "7rem", objectFit:"cover"}} src="https://www.rowanscatering.ie/wp-content/uploads/2020/03/deli-1200x800.jpg"></Card.Img>

                <Card.Body>
                    <Card.Title>Deli Centra</Card.Title>
                    <Card.Subtitle className="mb-4">Review by $USERNAME • 5 stars</Card.Subtitle>

                    <Card.Text>This deli is plain out shite, wow! I'll <strong>never</strong> eat there again!</Card.Text>

                </Card.Body>

                <Card.Footer className="text-left text-muted">{new Date().toLocaleDateString()}</Card.Footer>
            </Card>)      
        }

        return (
            <Container fluid>
                <Row style={{marginTop:"1rem"}}>
                    <Col>
                        <h2 className="mb-5">This months most - rated deli places</h2>
                    </Col>
                
                    <Col>
                        <h2 className="mb-5">Newest Reviews</h2>

                        <div>
                            {sampleReviews}
                        </div>
                    </Col>

                    <Col>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default HomePage;