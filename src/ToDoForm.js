import './App.css';
import React from 'react';

export default class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state = {
           text:""
        }        
    }
    addItem=()=>{
        let item = {
            task: this.state.text,
            done: false
        }
        this.props.addTask(item)
    }
    setText=(e)=>{
        this.setState({text:e.target.value})
    }
  render(){
  return <div>
       Task :<input type="text" onChange={this.setText} value={this.state.text} />
                <button onClick={this.addItem}>Add</button>
    </div>
}
}