import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HomePage extends Component {

    render() {
        return (
            
            <div>
                <div className=" text-center grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-6xl font-bold leading-7 text-gray-900 sm:text-6xl sm:truncate">
                        Welcome!
                    </h2>
                </div>

                <div>
                    <h3 className="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                        Top Reviews of the Week
                    </h3>
                </div>

                <div className="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                    Top Delis of the Week
                </div>

                <div>
                    <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                        Points:
                    </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                <h2 className = "text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                    Welcome to the App
                </h2>
                <p className="text-center ...">This is where we will tell you about the app!<br></br>
                That is how we make it a new line. </p>
                </div>
                
                
                <div>
                <Card> 
                    <Card.Header className="text-4xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">Review</Card.Header>
                    <Card.Body className="text-4xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                        <blockquote className="blockquote mb-0">
                            {//this will be implemented with backend
                            //eg this.props.image
                            //i have hard coded it for the moment to test the design
                            //
                            }
                            <center>
                            < img src="https://i2-prod.irishmirror.ie/whats-on/food-drink-news/article22082912.ece/ALTERNATES/s1200b/0_Roll-alone.jpg" width="200" height="200"></img>
                            </center>
                            <footer className="blockquote-footer">
                                   {//this will be implemented with backend
                            //for now i have left it as details e. this.props.store, this.props.rating etc
                             //i have hard coded it for the moment to test the design
                            }
                                <p>Store</p>
                                <p className="text-base font-normal leading-7 text-gray-900 xs:text-base sm:truncate">
                                   Centra, Galway
                                </p>
                                <br></br>
                                <p>Rating</p>
                                <p className="text-base font-normal leading-7 text-gray-900 xs:text-base sm:truncate">
                                    593 Points
                                </p>
                            </footer>
                            <br></br>
                        </blockquote>
                    </Card.Body>
                    <Button className="px-40 py-5 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                        Add a Review
                    </Button>
                </Card>
                </div>
                <div className=" text-center grid grid-cols-3 gap-4 text-4xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                    <h2>
                        number
                    </h2>
                    store
                    <h2>
                    points
                    </h2>
                   <h2>
                   </h2>
                </div>
            </div>
            <br></br>
            <br></br>

          
        </div>

        )
    }
}

export default HomePage;