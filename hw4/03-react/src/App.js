import './App.css';
import Main from './components/search/main';
import Home from './components/home/home';
import Houses from './components/houses/houses';


import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className = 'navContainer'>
      <Nav className="ml-auto" style={{backgroundColor:'black'}}>
          <NavItem className="nav-linkk">   <Link className="nav-link" to="/home">Home</Link> </NavItem>
          <NavItem className="nav-linkk">   <Link className="nav-link" to="/search">Search</Link> </NavItem>
          <NavItem className="nav-linkk">    <Link className="nav-link" to="/houses">Houses</Link> </NavItem>
        </Nav>
      </div>
       


        <Switch>

          <Route exact path='/home' component={Home} />
          <Route exact path='/houses' component={Houses} />
          <Route exact path='/search' component={Main} />
        </Switch>
      </ BrowserRouter>


    </div>
  );
}

export default App;
