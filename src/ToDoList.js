import './App.css';
import React from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component{
  render(){ 
  return (
    <div>
        {this.props.tasks.map((item,ind,arr)=>{
            return < ToDoItem title={item.task} item={item} deleteItem={this.props.deleteItem} toggleDone={this.props.toggleDone}/>
        })}
    </div>
  );
}
}

