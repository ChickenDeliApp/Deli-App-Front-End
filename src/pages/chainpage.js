import { useEffect, useState } from "react"
import { Card, Container, Form, Button, Col, Row, Table, Pagination } from "react-bootstrap"
import $ from "jquery"

function ChainPage( props ) {
	const [data, setData] = useState( <tr><td colSpan="2" className="text-center">No data 😢</td></tr> )
	const [pages, setPages] = useState( null )
	var activePage = 1

	function FetchData( page ) {

		$.get( `/chains?page=${page}`, ( data ) => {
			const maxPages = Math.max( ( data.count / 10 ) + 1, 1 )
			activePage = Math.min( page, maxPages )


			let index = 0
			const arr = data?.rows?.map( chain => {
				index++;
				return <tr key={index}>
					<td>{chain.chainName}</td>
					<td>{chain.User?.username ?? "Nobody"}</td>
				</tr>
			} )
			setData( arr )

			const pagination = []

			pagination.push( <Pagination.Prev onClick={() => {FetchData(Math.min(activePage - 1, maxPages))}}></Pagination.Prev> )

			for ( let index = Math.max(1, activePage - 2); index <= Math.min( activePage + 2, maxPages); index++ ) {
				pagination.push(
					<Pagination.Item key={index} active={index === activePage}>{index}</Pagination.Item>
				)
			}

			pagination.push( <Pagination.Next onClick={() => {FetchData(Math.min(activePage + 1, maxPages))}}></Pagination.Next> )

			setPages( pagination )
		} )
	}

	function Submit( e ) {
		e.preventDefault()

		$.post( {
			url: "/chains/new",
			data: $( "#chainForm" ).serialize(),
			success: ( data ) => {
				$( "#name" ).text( "" )
			}
		} )
	}

	useEffect( () => {
		FetchData( activePage )
	}, [])

	return (
		<Container className="pt-3 justify-items-center">
			<Row>
				<Col>
					<Card style={{ width: "32rem" }} className="text-left p-4">
						<Form style={{ background: "white" }} onSubmit={Submit} id="chainForm" >
							<h2 className="mb-4 text-primary font-weight-light">Add a new Restaurant Chain</h2>

							<Form.Group>
								<Form.Label>Restaurant Chain Name</Form.Label>
								<Form.Control type="text" name="name" id="name" />
							</Form.Group>

							<Card.Text className="text-gray-500">
								By submitting of a Restaurant Chain you acknowledge our Terms of Service agreement.
							</Card.Text>
							<Button variant="primary" block type="submit">
								Submit 😇
							</Button>
						</Form>
					</Card>
				</Col>

				<Col>
					<Card className="p-4">
						<h2 className="mb-2 text-primary font-weight-light">Existing Restaurant Chains</h2>
						<Card.Text className="text-gray-500">Before adding a new Restaurant Chain, please ensure it does already not exist.</Card.Text>

						<Table striped bordered hover size={data?.length ?? 0 >= 10 ? "sm" : ""}>
							<thead>
								<tr>
									<th>Chain Name</th>
									<th>Claimed by</th>
								</tr>
							</thead>

							<tbody>
								{data}
							</tbody>
						</Table>

						<Pagination>
							{pages}
						</Pagination>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default ChainPage