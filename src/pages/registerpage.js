import { Component } from "react";
import axios from 'axios';
import "../pages/loginpage.css"
import { Redirect } from 'react-router-dom'
class RegisterPage extends Component {
    //set variables to empty states
    state = {
        email: "",
        password: "",
        fieldErrors: {},
        registerError: null
    };
    //onclick event and sent to the server side
    handleSubmit = async e => {
        e.preventDefault();

        this.setState({
            fieldErrors: {},
            registerError: null
        })
        //setting the password and email to the data that was entered
        const { email, password } = this.state;
        //try catch to connect and post to the server
        try {
            //asynchronous post
            const response = await axios.post(
                "http://localhost:4000/api/users",
                { email, password }
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
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    //form below where the user can enter an email and a password
    render() {
        const { email, password, fieldErrors, registerError } = this.state;

        return (
            <div className="flex justify-start" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="bg-white rounded-xl p-14 border-solid border-4" style={{ borderColor: "#c7c1d0" }}>
                        <label>Email</label>
                        <input
                            type="text"
                            className={
                                !fieldErrors.email ? "form-control" : "form-control is-invalid"
                            }
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        {fieldErrors.email && (
                            <div className="invalid-feedback">{fieldErrors.email}</div>
                        )}
                    </div>
                    <div className="bg-white rounded-xl p-14 border-solid border-4" style={{ borderColor: "#c7c1d0" }}>
                        <label>Password</label>
                        <input
                            type="password"
                            className={
                                !fieldErrors.password
                                    ? "form-control"
                                    : "form-control is-invalid"
                            }
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        {fieldErrors.password && (
                            <div className="invalid-feedback">{fieldErrors.password}</div>
                        )}
                    </div>
                    <div className="px-40 py-10 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                        <button type="submit" className="btn btn-primary">
                            Submit
              </button>
                    </div>
                    {registerError && (
                        <div className="alert alert-danger" role="alert">
                            {registerError}
                        </div>
                    )}
                </form>
                <br />

            </div>
        );
    }
}
export default RegisterPage;