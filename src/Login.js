import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'


export default class login extends React.Component{
    constructor(){
        super();
        this.state={
           username:""
          ,password:""
        }
      }

    Submit=(e)=> {
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        this.setState({username:e.target.username.value,password:e.target.password.value})
        e.preventDefault();
      };
        
    render(){
        return <div>
        <form onSubmit={this.Submit}>
            Username: <input name="username" type="text" className="form-control" />
            Password: <input name="password" type="password" className="form-control" />
            <Button type="submit" variant="success" >Register</Button>
    </form>
    </div>
    }

}
