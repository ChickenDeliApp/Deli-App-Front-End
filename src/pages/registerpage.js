import { Component } from "react";
import axios from 'axios';
import "../pages/loginpage.css"
import { Redirect } from 'react-router-dom'
import { Form, Card, Button, Row, Col } from "react-bootstrap";

class RegisterPage extends Component {
    constructor() {
    super();
    //binding the data so it can be called
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
        email: "",
        password: "",
    };
}
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    //when the age has been added it is returned or stored here
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    //onclick event and sent to the server side
    handleSubmit = async e => {
        e.preventDefault();
        //setting the password and email to the data that was entered
        const newuser ={
            name: this.state.email,
            age: this.state.password
        }
        //try catch to connect and post to the server
        try {
            //asynchronous post
            const response = axios.post(
                "http://localhost:3599/register", newuser
            );
            console.log(response.data);
            //alerting the user that they are registered
            alert("Registered");
            //if there is an error
            //the server sends an appropriate response to the client side
        } catch (error) {
            if (error.response && error.response.data) {
                if (error.response.data.errors) {
                    this.setState({
                        fieldErrors: error.response.data.errors
                    });
                } else {
                    this.setState({
                        registerError: error.response.data
                    });
                }
            } else {
                console.log(error);
            }
        }
    };
    //set the state
    //form below where the user can enter an email and a password
    render() {
        const { email, password } = this.state;

        return (
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Card style={{ width: "32rem" }} className="text-left p-4">
                    <Form  onSubmit={this.handleSubmit} style={{ background: "white" }} noValidate >
                        <h2 className="mb-4 text-primary font-weight-light">Register a New Account</h2>

                        <Form.Row>
                            <Col>
                                <Form.Group type="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control                            
                            onChange={this.onChangeEmail} type="email" id="email" />
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
                                <Form.Group type="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  onChange={this.onChangePassword} type="password" placeholder="hunter2" id="password"
                                    />
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