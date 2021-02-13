import { Component } from "react";
import "../pages/loginpage.css"

class RegisterPage extends Component {
    render() {
        return (
            <div className="flex justify-start" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <form>
                    <div className="bg-white rounded-xl p-14 border-solid border-4" style={{borderColor: "#c7c1d0"}}>
                        <label>Email address</label>
                        <br></br>
                        <br></br>
                        <input type="email"
                            className="bgcolor rounded-lg"
                            placeholder="Enter email"
                            style={{backgroundColor: "#E5E7EB"}}
                        />
                    </div>
                    <br></br>
                    <div className="bg-white rounded-xl p-14 border-solid border-4" style={{borderColor: "#c7c1d0"}}>
                        <label>Password</label>
                        <br></br>
                        <br></br>
                        <input type="password"
                            className="bgcolor rounded-lg"
                            placeholder="Password"
                            style={{backgroundColor: "#E5E7EB"}}
                        />
                    </div>
                    <br></br>
                    <div className="bg-white rounded-xl p-14 border-solid border-4" style={{borderColor: "#c7c1d0"}}>
                        <label>Confirm Password</label>
                        <br></br>
                        <br></br>
                        <input type="password"
                            className="bgcolor rounded-lg"
                            placeholder="Confirm Password"
                            style={{backgroundColor: "#E5E7EB"}}
                        />
                    </div>
                    <br></br>
                    <div className="px-40 py-10 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                    <button 
                        type="submit"
                    >
                        Register
                </button>
                    </div>
                  
                </form>
            </div>
        )
    }
}

export default RegisterPage;