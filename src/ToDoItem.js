import './App.css';
import React from 'react';

export default class ToDoItem extends React.Component{    
  render(){
    return <div style={{backgroundColor:this.props.item.done?'green':'white'}}>
    <h5>{this.props.title}</h5>
    <button onClick={()=>this.props.deleteItem(this.props.item.id)} >Delete</button>
    <button onClick={()=>this.props.toggleDone(this.props.item.id)}>Done</button>
</div>
}
}

