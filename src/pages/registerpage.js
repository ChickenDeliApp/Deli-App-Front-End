import { Component } from "react";
import axios from 'axios';
import "../pages/loginpage.css"
import { Redirect } from 'react-router-dom'
import { Form, Card, Button, Row, Col } from "react-bootstrap";

class RegisterPage extends Component {

    render() {
        return (
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Card style={{ width: "32rem" }} className="text-left p-4">
                    <Form style={{ background: "white" }} noValidate >
                        <h2 className="mb-4 text-primary font-weight-light">Register a New Account</h2>

                        <Form.Row>
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="email" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" id="username" />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col xs={7}>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="hunter2" id="password" />
                                </Form.Group>
                            </Col>

                            <Col xs={5}>
                                <Form.Group controlId="dob">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" id="dob" />
                                </Form.Group>
                            </Col>

                        </Form.Row>

                        <Form.Check type="checkbox" label="I agree to the Terms of Service" className="mb-3"></Form.Check>
                        <Button variant="primary" type="submit">
                            Proceed
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default RegisterPage;