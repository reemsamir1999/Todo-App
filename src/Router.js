import Login from './Login';
import Register from './Register';
import ToDo from './ToDo';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default class route extends React.Component{
     
    render() {
        return (
          <Router>
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Nav.Item>
        <Link to="/todo" style={{margin:"1rem",textDecoration: "none", color: 'green' }}>ToDo</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/login" style={{margin:"1rem",textDecoration: "none", color: 'green' }}>Login</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/register" style={{margin:"1rem",textDecoration: "none", color: 'green' }}>Register</ Link>
        </Nav.Item>
        </nav>
            <Switch>
              <Route exact path="/todo" component={ToDo} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        );
      }

}


