import { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "../pages/loginpage.css"
import $ from "jquery";

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: null
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){

        var page = this
        $("#loginForm").on("submit", function(event) {
            event.preventDefault();

            if(!$("#tos:checked").val()){
                $("#tos").addClass("is-invalid")
                return
            }

            $.ajax({
                url: "/login",
                type: "GET",
                data:$("#loginForm").serialize(),
                success: function(data){
                    if(data.redirect){
                        window.location.href = data.redirect
                    }
                },
            })

        })

        $("#tos").on("change", function(event) {
            $("#submit").toggleClass("disabled")
        })
    }
    render() {
        return (
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <Card style={{ width: "28rem" }} className="text-left p-4">
                    <Form style={{ background: "white" }} id="loginForm">
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