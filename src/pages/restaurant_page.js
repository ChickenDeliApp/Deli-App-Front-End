import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import $ from "jquery";
import { useHistory, useParams } from "react-router";


const mapStyle = {
	width: '30rem',
	height: "30rem"
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

	return isLoaded && props.location ? (
		<GoogleMap mapContainerStyle={mapStyle} center={{ lat: props?.location[0], lng: props?.location[1] }} zoom={15} onLoad={onLoad} onUnmount={onUnmount}>
			<Marker position={{ lat: props?.location[0], lng: props?.location[1] }}></Marker>
		</GoogleMap>
	) : null
}
memo( GoogleMapComp )


function RestaurantPage( props ) {
	const { id } = useParams()
	const [reviews, setReviews] = useState( <tr><td colSpan={3} className="text-center bg-gray-200">No reviews yet 😢</td></tr> )
	const [data, setData] = useState( [] )
	const [loaded, setLoaded] = useState( false )
	const hist = useHistory()

	useEffect( () => {
		$.get( `/chains/restaurant/${id}`, ( data ) => {
			if ( data.Reviews?.length > 0 ) {
				setReviews( data?.Reviews?.map( ( review ) => {
					return (
						<tr>
							<td>{review.User.username}</td>
							<td className="text-left">{review.text}</td>
							<td>{review.rating}</td>
						</tr>
					)
				} ) ?? reviews )
			}

			setData( data )
			setLoaded( true )
		} )
	}, [] )

	if ( !loaded ) {
		return (
			<div className="flex justify-center h-screen">
				<Spinner variant="primary" className="m-auto" animation="border" ></Spinner>
			</div>
		);
	}

	if ( !data ) {
		hist.goBack()
		return null;
	}

	return (
		<Container className="mt-3 p-3" as={Card}>
			<h2 className="text-primary font-weight-light">{data.restaurantName} ({data.DeliChainChainName})</h2>
			{/* <h5 className="mb-4 text-muted italic font-weight-light">Added by USERNAME</h5> */}
			<Row>
				<Col className="mx-auto" lg={6}>
					<Table bordered size="sm" className="text-center">
						<colgroup>
							<col span="1" style={{ width: "8rem" }} />
							<col span="1" className="w-30" />
							<col span="1" className="w-min" />
						</colgroup>

						<thead>
							<tr>
								<th>Review by</th>
								<th>Description</th>
								<th>Rating</th>
							</tr>


						</thead>

						<tbody>
							{reviews}
						</tbody>
					</Table>
				</Col>

				<Col lg={"auto"} className="m-auto">
					<GoogleMapComp location={data?.geo_location?.coordinates} />
				</Col>
			</Row>
		</Container>
	)
}

export default RestaurantPage