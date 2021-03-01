import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatings from "../../node_modules/react-star-ratings";
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
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
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
                    <div className="">
                        <Card>
                            <Card.Img variant="top" style={{maxHeight: "150px"}} src="https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/67379564_2433980733480138_5269119557234065408_o.jpg?_nc_cat=107&ccb=3&_nc_sid=e3f864&_nc_ohc=WIV_FEnT0UsAX8rdF_v&_nc_ht=scontent-dub4-1.xx&oh=248350fec8a4856ad4314dd014196e94&oe=606453D7"></Card.Img>

                            <Card.Body>
                                <Card.Title>
                                    Duggans Renmore Spar
                                </Card.Title>
                                <Card.Text>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <div>
                                    
                                </div>

                                <p>
                                    <h4>Score <small>(342 votes)</small></h4>
                                    <StarRatings numberOfStars={5} rating={4.30} starRatedColor="gold" starDimension="45px" starSpacing="0px"></StarRatings>
                                </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br></br>
                <br></br>


            </div>

        )
    }
}

export default HomePage;