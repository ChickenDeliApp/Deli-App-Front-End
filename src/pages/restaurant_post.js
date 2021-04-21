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
	const [marker, setMarkers] = useState( [] )

	const onLoad = useCallback( ( map ) => {
		setMap( map )
	}, [] )

	const onUnmount = useCallback( function callback( map ) {
		setMap( null )
	}, [] )

	const addMarker = useCallback( ( event ) => {
		props.LocationUpdate( event.latLng.lat(), event.latLng.lng() )

		setMarkers(
			<Marker position={event.latLng}></Marker>
		)
	}, [] )

	return isLoaded ? (
		<GoogleMap onClick={addMarker} mapContainerStyle={mapStyle} center={{ lat: 53.2707, lng: -9.0568 }} zoom={8} onLoad={onLoad} onUnmount={onUnmount}>
			{ marker}
		</GoogleMap>
	) : null
}
memo( GoogleMapComp )

function PostRestaurantPage( props ) {

	const [chains, setChains] = useState( [] )
	const [location, setLocation] = useState( [0, 0] )
	const [notice, setNotice] = useState( null )

	const addressRef = useRef(null)
	const postalRef = useRef(null)

	const fetchChains = useCallback( () => {
		$.get( "/chains/names", ( data ) => {
			let index = 0
			let chains = data.map( chain => {
				index++
				return (
					<option key={index} value={chain.chainName}>{chain.chainName}</option>
				)
			} )

			setChains( chains )
		} )
	}, [] )

	useEffect( () => {
		fetchChains()
	}, [fetchChains] )

	const submitRestaurant = useCallback( ( event ) => {
		event.preventDefault()

		console.log($( "#chainForm" ).serialize());

		$.post( {
			url: "/chains/restaurant/new",
			data: $( "#chainForm" ).serialize(),
			success: ( res ) => {
				$( "#chainForm" ).trigger( "reset" )

				setNotice( <Alert variant="success">{res.message}</Alert> )
			}
		} )
	}, [] )

	const onUpdatePosition = useCallback( async ( lat, long ) => {
		$.get( `http://api.positionstack.com/v1/reverse?access_key=95df04ae55037b2aa8d53c770d88eb02&query=${lat},${long}&limit=1`, ( data ) => {
			addressRef.current.value = data?.data[0]?.label ?? "Unknown Address" 
			postalRef.current.value = data?.data[0]?.postal_code ?? ""
		} )

		setLocation( [lat, long] )
	}, [] )

	return (
		<Container fluid className="p-3 h-100">
			<Row className="h-100 flex flex-grow">
				<Col lg={4} md={4} sm={4} s={5} xs={14} className="pb-3">
					<Card className="text-left p-4">
						<Form style={{ background: "white" }} id="chainForm" onSubmit={submitRestaurant}>
							{notice}
							<h2 className="mb-4 text-primary font-weight-light">Add a new Restaurant</h2>
							<Form.Row>

								<Col>
									<Form.Group controlId="restaurantName">
										<Form.Label>Restaurant Name</Form.Label>
										<Form.Control name="restaurantName" required type="text" placeholder="Pizza Co." />
									</Form.Group>
								</Col>

								<Col>
									<Form.Group controlId="chainName">
										<Form.Label>Restaurant Chain</Form.Label>
										<Form.Control name="chainName" required as="select">
											{chains}
										</Form.Control>
									</Form.Group>
								</Col>
							</Form.Row>

							<Form.Row>
								<Col>
									<Form.Group controlId="lat">
										<Form.Label>Latitude</Form.Label>
										<Form.Control name="lat" required readOnly type="number" value={location[0]} />
									</Form.Group>
								</Col>

								<Col>
									<Form.Group controlId="long">
										<Form.Label>Longitude</Form.Label>
										<Form.Control name="long" required readOnly type="number" value={location[1]}></Form.Control>
									</Form.Group>
								</Col>
							</Form.Row>


							<Form.Row>
								<Col>
									<Form.Group controlId="restaurantAddress">
										<Form.Label>Full Address</Form.Label>
										<Form.Control name="restaurantAddress" ref={addressRef} required type="text" placeholder="" />
									</Form.Group>
								</Col>

								<Col lg={3}>
									<Form.Group controlId="restaurantPostcode">
										<Form.Label>Postal Code</Form.Label>
										<Form.Control name="restaurantPostcode" required type="text" placeholder="" ref={postalRef} />
									</Form.Group>
								</Col>
							</Form.Row>




							<Button variant="primary" type="submit">
								Proceed
							</Button>
						</Form>
					</Card>
				</Col>

				<Col style={{ height: "calc(100vh - 90px)" }}>
					<GoogleMapComp LocationUpdate={onUpdatePosition}></GoogleMapComp>
				</Col>
			</Row>

		</Container>
	)
}

export default PostRestaurantPage