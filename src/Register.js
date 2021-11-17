import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'

export default class Register extends React.Component{
  constructor(){
    super();
    this.state={
        email:""
       ,username:""
      ,password:""
    }
  }
/*
  setEmail=(e)=>{
    this.setState({email:e.target.value})
    }
  setUsername=(e)=>{
    this.setState({username:e.target.value})
    }
  setPassword=(e)=>{
    this.setState({password:e.target.value})  
    }
    */
    update=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }

    render(){
      return <div >
        <label>Email</label>
        <input name="email"  type="email" onChange={this.update} value={this.state.email} className="form-control"/>
        <label>Username</label>
        <input name="username"  type="text" onChange={this.update} value={this.state.username} className="form-control"/>
        <label>Password</label>
        <input name="password"  type="password" onChange={this.update} value={this.state.password} className="form-control"/>
        <Button type="submit" variant="success" >Register</Button>
    </div>
    }
}
