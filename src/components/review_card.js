import { Component } from "react";
import { Card } from "react-bootstrap";

class ReviewCard extends Component {

	state = {
		author: undefined,
		store: "Undefined Store",
		rating: 5,
		date: new Date(),
		description: undefined
	}

	render() {
		return (
			<Card className="w-75 mx-auto mb-4 text-left">
                <Card.Img style={{maxHeight: "7rem", objectFit:"cover"}} src="https://www.rowanscatering.ie/wp-content/uploads/2020/03/deli-1200x800.jpg"></Card.Img>

                <Card.Body>
                    <Card.Title>{ this.state.store }</Card.Title>
                    <Card.Subtitle>Review by {this.state.author || "an Anonymous User"} • {this.state.rating ?? 0} stars</Card.Subtitle>

					{ this.state.description ? <Card.Text className="mt-4">{ this.state.description }</Card.Text> : null }
                </Card.Body>

                <Card.Footer className="text-left text-muted">{this.state.date.toLocaleDateString()}</Card.Footer>
            </Card>
		)
	}
}

export default ReviewCard