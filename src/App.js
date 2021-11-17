import Login from './Login';
import Register from './Register';
import ToDo from './ToDo';
import Nav from './Nav';
import './App.css';
import React from 'react';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      currentScreen:""
    }
  }

  changeCurrentScreen=(screenName)=>{
    this.setState({currentScreen:screenName})
  }
  render(){
  return (
    <div className="App">
      <Nav changeCurrentScreen={this.changeCurrentScreen} />
      {this.state.currentScreen === "ToDo" &&  <ToDo/>}
      {this.state.currentScreen === "Login" &&  <Login/>}
      {this.state.currentScreen === "Register" &&  <Register/>}
    </div>
  );
}
}

