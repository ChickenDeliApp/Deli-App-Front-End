import { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "../pages/loginpage.css"

class LoginPage extends Component {
    render() {
        return (
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <Card style={{ width: "28rem" }} className="text-left p-4">
                    <Form style={{ background: "white" }} noValidate action="/login" method="POST">
                        <h2 className="mb-4 text-primary font-weight-light">Account Login</h2>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="hunter2" id="password" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Proceed
                        </Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default LoginPage;