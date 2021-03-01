import { Button } from "bootstrap";
import { Component } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import StarRatings from '../../node_modules/react-star-ratings';

class ReviewPost extends Component {
    render(){
        return(
            <Container className="text-left">
                <h2 className="text-left">Post a new review.</h2>

                <Col>


                </Col>

                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Deli Name</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Your Review</Form.Label>
                            <Form.Control as="textarea" rows={3}></Form.Control>
                            <Form.Text className="text-muted">Please keep your reviews truthful and precise.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.File label="Upload your photos here"></Form.File>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Rating</Form.Label><br/>
                            <StarRatings numberOfStars={5} rating={4.5} starRatedColor="gold" starDimension="45px" starSpacing="0px"></StarRatings>
                        </Form.Group>

                        <button className="btn btn-primary" type="submit">Submit</button>

                    </Form>
                </Col>
            </Container>
        )
    }
}

export default ReviewPost;