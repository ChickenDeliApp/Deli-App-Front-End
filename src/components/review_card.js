import { Component } from "react";
import { Card } from "react-bootstrap";

class ReviewCard extends Component {

	render() {
		let date = new Date(this.props.date)

		return (
			<Card id={this.props.id} className="w-75 mx-auto mb-4 text-left">
                <Card.Img style={{maxHeight: "7rem", objectFit:"cover"}} src="https://www.rowanscatering.ie/wp-content/uploads/2020/03/deli-1200x800.jpg"></Card.Img>

                <Card.Body>
                    <Card.Title>{ this.props.store }</Card.Title>
                    <Card.Subtitle>Review by {this.props.author || "an Anonymous User"} • {this.props.rating ?? 0} stars</Card.Subtitle>

					{ this.props.description ? <Card.Text className="mt-3">{ this.props.description }</Card.Text> : null }
                </Card.Body>

                <Card.Footer className="text-left text-muted">{date.toLocaleDateString()}</Card.Footer>
            </Card>
		)
	}
}

export default ReviewCard