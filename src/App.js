import './App.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';
import { Navbar, Nav, Form } from 'react-bootstrap';
import MapPage from './pages/mappage';
import ReviewPost from './pages/review_post';


function App() {
  return (
      <div className="App">
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Nav>
            <Navbar.Brand href="/">
              Chicken App
          </Navbar.Brand>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/review/post">Post a Review</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
          </Nav>

          <Nav className="justify-content-end">
            <a className="btn btn-outline-primary btn-sm navbar-right btn-outlined mr-2" href="/login">Log-in</a>
            <a className="btn btn-outline-primary btn-sm navbar-right btn-outlined" href="/register">Register</a>

          </Nav>
        </Navbar>

        <Router>
          <Switch>
            {
              // this is how when we navigate to the required function on the app
              //that it returns the function of what we want to do
            }
            <Route path='/(home|)' component={HomePage} exact />
            <Route path='/register' component={RegisterPage} exact />
            <Route path='/login' component={LoginPage} exact />
            <Route path='/map' component={MapPage} exact />
            <Route path="/review/post" component={ReviewPost} exact />

          </Switch>
        </Router>
    </div>
  );
}

export default App;
