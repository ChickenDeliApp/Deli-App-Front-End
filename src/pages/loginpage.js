import { Component } from "react";
import "../pages/loginpage.css"

class LoginPage extends Component {
    render() {
        return (
            <div className="flex justify-center" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>

                <div className="bg-white rounded-xl p-14 border-solid border-4" style={{borderColor: "#c7c1d0"}}>
                    <h1 className="text-lg mb-2 -mt-10 -ml-10 antialiased font-semibold">Please log in</h1>
                    <form>
                        <label>Username</label><br/>
                        <input type="text" className="bgcolor rounded-lg" placeholder="">
                        </input><br/>

                        <label>Password</label><br/>
                        <input type="Password" className="bgcolor rounded-lg" placeholder="">
                        </input>
                    </form>                   
                </div>
            </div> 
        )
    }
}

export default LoginPage;