import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="grid grid-cols-3 gap-4">
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
                </div>
                
                <div>
                <Card> 
                    <Card.Header>Review</Card.Header>
                    <Card.Body>
                        {
                            //just displaying the details of the player. Also displays button that the user 
                            //can utilise should they wish to edit/ delete a player
                        }
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                <p>Details</p>
                            </footer>
                            <br></br>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" size="lg">
                        Delete
                    </Button>
                    
                </Card>
                </div>
                
            </div>

            <br></br>
            <br></br>

            <div>
                <h2 className = "text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                    Welcome to the App
                </h2>
                <p className="text-left ...">This is where we will tell you about the app!<br></br>
                That is how we make it a new line. </p>
            </div>
        </div>

        )
    }
}

export default HomePage;