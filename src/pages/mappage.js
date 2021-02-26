import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MapPage extends Component {
    render() {
        return (
            <div >
                <Card> 
                    <Card.Header className="text-4xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">Search for a Store</Card.Header>
                    <Card.Body className="text-4xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                        <blockquote className="blockquote mb-0">
                            
                           <p>
                               Store
                           </p>

                           <input type="text"
                            className="bgcolor rounded-lg"
                            placeholder="Name of store"
                            style={{backgroundColor: "#E5E7EB"}}
                        />
                            <br></br>

                            {//in here we will implement the google map using an api key, this will be done in the backend
                            //for the moment ive left a google map image as an example as to how it will look
                        }
                        <br></br>
                        </blockquote>
                    </Card.Body>
                    <Button className="px-40 py-5 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                       Search
                    </Button>
                </Card>
                <br></br>
                <h1>
                            The map will be implemented here below. Hard coded before we implement on backend
                        </h1>
                        <br></br>
                        < img src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" ></img>

                </div>
        )
    }
}

export default MapPage;