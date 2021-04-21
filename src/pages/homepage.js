import { Component } from "react";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import ReviewCard from "../components/review_card";
import $ from "jquery"
class HomePage extends Component {

	state = {
		latest: null
	}

	componentDidMount(){
		let latestReviews = []

		$.ajax({
			url: "/reviews/latest",
			success: (data) => {
				data.forEach(review => {
					latestReviews.push( <ReviewCard date={review.createDate} author={review["User.username"]} store={review.restaurant} rating={review.rating} description={review.text}  ></ReviewCard> )
				});

				this.setState({
					state: latestReviews
				})
			}
		})
		
	}

    render() {

        return (
            <Container fluid>
                <Row style={{marginTop:"1rem"}}>
                    <Col>
                        <h2 className="mb-3 mt-3 text-center">TOP 10 Reviewed Delis (Monthly)</h2>
						
                    </Col>
                
                    <Col>
                        <h2 className="mb-3 mt-3 text-center">Newest Reviews</h2>

                        <div className="text-center">
                            {this.state.latest !== null ? this.state.latest : <small>No reviews to display :(</small>}
                        </div>
                    </Col>

                    <Col>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default HomePage;