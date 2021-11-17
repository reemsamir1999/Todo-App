import './App.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
 

export default class Navigator extends React.Component{

    render(){
        return<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Nav>
        <Nav.Item >
        <Nav.Link  onClick={()=>this.props.changeCurrentScreen("ToDo")} changeCurrentScreen={this.props.changeCurrentScreen}>ToDo</Nav.Link>
        </Nav.Item>
        <Nav.Item >
        <Nav.Link  onClick={()=>this.props.changeCurrentScreen("Login")} changeCurrentScreen={this.props.changeCurrentScreen}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item >
        <Nav.Link onClick={()=>this.props.changeCurrentScreen("Register")} changeCurrentScreen={this.props.changeCurrentScreen}>Register</Nav.Link>
        </Nav.Item>
        </Nav>
    </nav>
    }}