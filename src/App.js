import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
    {// creating a navigation to different urls and a navbar for convinience
     //nav bar means user doesnt have to enter the specific url
    }
    <div className="App">

      <Switch>
        {
        // this is how when we navigate to the required function on the app
        //that it returns the function of what we want to do
        }
        <Route path='/home' component={HomePage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/login' component={LoginPage} exact />
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
