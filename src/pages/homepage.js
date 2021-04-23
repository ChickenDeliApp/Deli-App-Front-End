import { Component, useCallback, useEffect, useState } from "react";
import { Card, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import ReviewCard from "../components/review_card";
import $ from "jquery"
import { useHistory } from "react-router";
function HomePage() {

	const [latestReviews, setLatest] = useState( [] )
	const [bestReviews, setBest] = useState( [] )
	const history = useHistory()

	const fetchBest = useCallback( () => {
		let bestReviews = []

		$.ajax( {
			url: "/reviews/topdelis",
			success: ( data ) => {
				console.log( data );

				bestReviews = data.map( (review, index) => {
					return (
						<tr onClick={() => { history.push(`/restaurant/view/${review.id}`)}}>
							<td>{index + 1}</td>
							<td>{review.restaurantName}</td>
							<td>{review.DeliChainChainName}</td>
							<td>{parseFloat(review.average).toFixed(1)} (Based on {review.reviews} review)</td>
						</tr>
					)
				} )

				setBest( bestReviews )
			}
		} )

	}, [] )

	const fetchLatest = useCallback( () => {
		$.ajax( {
			url: "/reviews/latest",
			success: ( data ) => {
				let latestReviews = data.map( review => {
					return (
						<ReviewCard key={review.id} date={review.createDate} author={review?.User?.username} store={review.DeliRestaurant.restaurantName + " || " + review.DeliRestaurant.DeliChainChainName} rating={review.rating} description={review.text}  ></ReviewCard>
					)
				} ) ?? []

				setLatest( latestReviews )
			}
		} )
	}, [] )

	useEffect( () => {
		fetchLatest()
		fetchBest()
	}, [] )

	return (
		<Container className="">
			<Row className="justify-center">
				<Col>
					<h2 className="mt-3 text-center">TOP 10 Reviewed Delis (Monthly)</h2>

					<Card>
						<Table bordered striped hover size="sm" className="mb-0">
							<thead>
								<tr className="text-center">
									<th>Rank</th>
									<th>Restaurant Name</th>
									<th>Chain</th>
									<th>Rating</th>
								</tr>
							</thead>

							<tbody className="text-center">
								{bestReviews}
							</tbody>
						</Table>
					</Card>
				</Col>

				<Col>
					<h2 className="mt-3 text-center">Newest Reviews</h2>

					<div className="text-center">
						{latestReviews.length > 0 ? latestReviews : <small>No reviews to display :(</small>}
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage;