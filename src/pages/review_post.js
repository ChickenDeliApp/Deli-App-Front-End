import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { createRef, memo, useCallback, useEffect, useRef, useState } from "react"
import { Button, Card, Col, Container, Form, Row, Alert } from "react-bootstrap"
import $ from "jquery"

const mapStyle = {
	width: '100%',
	height: '100%'
}

function GoogleMapComp( props ) {
	const { isLoaded } = useJsApiLoader( {
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyCl9teoIpWCECj_26Fe8MGsI2eKQsojTFA"
	} )

	const [map, setMap] = useState( null )

	const onLoad = useCallback( ( map ) => {
		setMap( map )
	}, [] )

	const onUnmount = useCallback( function callback( map ) {
		setMap( null )
	}, [] )

	return isLoaded ? (
		<GoogleMap  mapContainerStyle={mapStyle} center={{ lat: 53.2707, lng: -9.0568 }} zoom={8} onLoad={onLoad} onUnmount={onUnmount}>
			{props.Markers}
		</GoogleMap>
	) : null
}
memo( GoogleMapComp )

function ReviewPost( props ) {

	const [restaurants, setRestaurants] = useState( [] )
	const [restaurantsDrop, setRestaurantsInfo] = useState( [] )
	const [notice, setNotice] = useState( null )

	const optionRef = useRef(null)

	const fetchRestaurants = useCallback( () => {
		$.get( "/chains/restaurant/all", ( data ) => {
			console.log(data);

			let index = 0
			let restaurants = data?.map( chain => {
				index++
				return (
					<Marker onClick={() => {optionRef.current.value = chain.id}} title={chain.restaurantName} key={chain.id} position={{lat: chain.geo_location.coordinates[0], lng: chain.geo_location.coordinates[1]}}></Marker>
				)
			} ) ?? []

			index = 0
			let restaurantsInfo = data.map( restaurant => {
				index++
				return (
					<option value={restaurant.id} key={index}>{ restaurant.restaurantName + " | " + restaurant.DeliChainChainName }</option>
				)
			})

			setRestaurants( restaurants )
			setRestaurantsInfo( restaurantsInfo )
		} )
	}, [] )

	useEffect( () => {
		fetchRestaurants()
	}, [fetchRestaurants] )

	const submitRestaurant = useCallback( ( event ) => {
		event.preventDefault()

		$.post( {
			url: "/reviews/new",
			data: $( "#chainForm" ).serialize(),
			success: ( res ) => {
				$( "#chainForm" ).trigger( "reset" )

				setNotice( <Alert variant="success">{res.message}</Alert> )
			}
		} )
	}, [] )

	return (
		<Container fluid className="p-3 h-100">
			<Row className="h-100 flex flex-grow">
				<Col lg={4} md={4} sm={4} s={5} xs={14} className="pb-3">
					<Card className="text-left p-4">
						<Form style={{ background: "white" }} id="chainForm" onSubmit={submitRestaurant}>
							{notice}
							<h2 className="mb-4 text-primary font-weight-light">Post a new Review</h2>
							<Form.Row>

								<Col>
									<Form.Group controlId="reviewRestaurant">
										<Form.Label>Restaurant</Form.Label>
										<Form.Control ref={optionRef} name="reviewRestaurant" required as="select">
											{ restaurantsDrop }
										</Form.Control>
									</Form.Group>
								</Col>
							</Form.Row>


							<Form.Group controlId="reviewText">
								<Form.Label>Review</Form.Label>
								<Form.Control as="textarea" rows={5} name="reviewText" required type="text" placeholder="" />
							</Form.Group>

							<Form.Group controlId="reviewScore">
								<Form.Label>Rating</Form.Label>
								<Form.Control name="reviewScore" required type="range" min="1" max="5" placeholder=""/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Proceed
							</Button>
						</Form>
					</Card>
				</Col>

				<Col style={{ height: "calc(100vh - 90px)" }}>
					<GoogleMapComp Markers={restaurants}></GoogleMapComp>
				</Col>
			</Row>

		</Container>
	)
}

export default ReviewPost