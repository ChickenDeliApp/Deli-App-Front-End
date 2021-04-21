import { Form, Card, Button } from "react-bootstrap";
import "../pages/loginpage.css"
import $ from "jquery";
import UsernameStore from "../states/User/Store";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function LoginPage(props){
	const hist = useHistory()

	useEffect(() => {
        $("#loginForm").on("submit", function(event) {
            event.preventDefault();

            $.ajax({
                url: "/login",
                type: "POST",
                data:$("#loginForm").serialize(),
                success: function(data){
					UsernameStore.dispatch({
						type: "user/login",
						payload: data.username
					})

					hist.push("/")
                },
				error: function(data){
					$("#email").addClass("is-invalid")
					$("#password").addClass("is-invalid")
				}
            })

        })
	})

	return (
		<div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			<Card style={{ width: "28rem" }} className="text-left p-4">
				<Form style={{ background: "white" }} id="loginForm">
					<h2 className="mb-4 text-primary font-weight-light">Account Login</h2>

					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name="email" id="email" />
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="hunter2" id="password" />
						<Form.Control.Feedback type="invalid">Log-in failed, please check your details and try again</Form.Control.Feedback>
					</Form.Group>


					<Button variant="primary" type="submit">
						Proceed
					</Button>
				</Form>
			</Card>
		</div>)
}

export default LoginPage;