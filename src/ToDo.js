import './App.css';
import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default class ToDo extends React.Component{
    idInc=3;
    constructor(){
        super();
        this.state = {
            items:[{
                id:1,
                task:"Wake up!",
                done:false
            },{
                id:2,
                task:"Get your Laptop",
                done:false
            }]
        }
    }
    deleteItem=(id)=>{
        let itemIndex = this.state.items.findIndex((item)=>item.id===id);
        this.state.items.splice(itemIndex,1);
        this.setState({items:this.state.items});
    }
    toggleDone=(id)=>{
        let item = this.state.items.find((item)=>item.id===id)
        item.done = !item.done;
        this.setState({items:this.state.items});
    }
    addItem=(item)=>{
        item.id=this.idInc++;
        this.state.items.push(item);
        this.setState({items:this.state.items});
    }
  render(){
  return <div>
            <ToDoList tasks={this.state.items} deleteItem={this.deleteItem} toggleDone={this.toggleDone} />
            <ToDoForm addTask={this.addItem} />
    </div>
}
}