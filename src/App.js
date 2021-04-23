import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ReviewPost from './pages/review_post';
import { useSelector } from 'react-redux';
import $ from "jquery"
import UsernameStore from './states/User/Store';
import ChainPage from './pages/chainpage';
import { useEffect } from 'react';
import PostRestaurantPage from './pages/restaurant_post';
import RestaurantPage from './pages/restaurant_page';


function App() {
	var username = useSelector(state => state.username)

	function doLogout(event){
		event.preventDefault()

		$.post("/logout")

		UsernameStore.dispatch({
			type:"user/logout"
		})
	}

	useEffect(() => {
		$.get("/authed", (data) => {
			if(username !== undefined && !data.loggedIn){
				UsernameStore.dispatch({
					type:"user/logout"
				})
			} else if (username === undefined && data.loggedIn) {
				UsernameStore.dispatch({
					type: "user/login",
					payload: data.username
				})
			}
		})
	}, [username])

	return (
		<div className="App">
			<Router>
				<Navbar bg="dark" variant="dark" className="justify-content-between">
				<Nav>
					<Navbar.Brand href="/">
					Chicken App
				</Navbar.Brand>

					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/review/post">Post a Review</Nav.Link>
					<NavDropdown title="Restaurants">	
						<NavDropdown.Item href="/restaurant/post">Add a Restaurant</NavDropdown.Item>
						<NavDropdown.Item href="/chain/post">Add a Chain</NavDropdown.Item>
					</NavDropdown>

					{/* <Nav.Link href="/map">Restaurant Map</Nav.Link> */}
				</Nav>


				{ username != null ?

					<NavDropdown title={`Welcome, ${username}`}>
						<NavDropdown.Item className="text-gray-200" onClick={doLogout}>Log-Out</NavDropdown.Item>
					</NavDropdown>
				:
					<Nav className="justify-content-end">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
				}

				</Navbar>
					<Switch>
						{
						// this is how when we navigate to the required function on the app
						//that it returns the function of what we want to do
						}
						<Route path='/(home|)' component={HomePage} exact />
						<Route path='/register' component={RegisterPage} exact />
						<Route path='/login' component={LoginPage} exact />
						<Route path="/review/post" component={ReviewPost} exact />
						<Route path="/restaurant/view/:id" component={RestaurantPage} exact />
						<Route path="/restaurant/post" component={PostRestaurantPage} exact />
						<Route path="/chain/post" component={ChainPage} exact />

						<Route path="*">
							<h1 className="p-3">404 Not Found :(</h1>
						</Route>

					</Switch>
			</Router>
		</div>
	);
}

export default App;
