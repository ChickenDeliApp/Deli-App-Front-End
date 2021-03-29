import { Component } from "react";
import axios from 'axios';
import "../pages/loginpage.css"
import { Redirect } from 'react-router-dom'
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import $ from "jquery";

class RegisterPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            error: null
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){

        var page = this
        $("#registerForm").on("submit", function(event) {
            event.preventDefault();

            if(!$("#tos:checked").val()){
                $("#tos").addClass("is-invalid")
                return
            }

            $.ajax({
                url: "/register",
                type: "POST",
                data:$("#registerForm").serialize(),
                success: function(data){
                    if(data.redirect){
                        window.location.href = data.redirect
                    }
                },
                error: function(req, status, error){
                    const errors = req.responseJSON || {}

                    page.setState({error: errors.msg || null })

                    if(errors.errors) {
                        errors.errors.forEach(error => {
                            var input = $(`#${error.param}`)

                            input.addClass("is-invalid")
                            $(`div.invalid-feedback`, input.parent()).text(error.msg.charAt(0).toUpperCase() + error.msg.slice(1))
                        });
                    }
                }
            })

        })

        $("#tos").on("change", function(event) {
            $("#submit").toggleClass("disabled")
        })
    }

    render() {
        return (
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                
                <Card style={{ width: "32rem" }} className="text-left p-4">

                    {this.state.error ? <Alert variant="danger" id="failalert">
                        {this.state.error}
                    </Alert> : null}

                    <Form style={{ background: "white" }} id="registerForm" >
                        <h2 className="mb-4 text-primary font-weight-light">Register a New Account</h2>

                        <Form.Row>
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" id="email" required/>
                                    <Form.Control.Feedback type="invalid">Please provide a valid username</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" name="username" id="username" required />
                                    <Form.Control.Feedback type="invalid">Please provide a valid username</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col xs={7}>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="hunter2" name="password" id="password" required/>
                                    <Form.Control.Feedback type="invalid">Please provide a valid username</Form.Control.Feedback>
                                    <Form.Text className="text-muted">A-Z, numeric, 5-60 characters long</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={5}>
                                <Form.Group controlId="dob">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" id="dob" name="dob" required />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Check type="checkbox" label="I agree to the Terms of Service" id="tos" className="mb-3" required></Form.Check>
                        <Button id="submit" variant="primary" type="submit" className="disabled">
                            Proceed
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default RegisterPage;