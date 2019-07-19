import React, { Component } from 'react';
import TaskLists from './TaskLists';
class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [], //array of strings
      currentToDo: "",
    }
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      currentToDo: event.target.value,
    })
  }
  addItem = event => {
    event.preventDefault()
  
    this.setState({ todos: [...this.state.todos, this.state.currentToDo], currentToDo: "" })
  }
  
  
  deleteItem = idx => {
  const sepItems = this.state.todos.filter( (el, index) => {
    return index !== idx;
  })
  this.setState({
    todos: sepItems, 
  })
}
 render() {
    // console.log(this.state);
    return (
      <div>
        <div className='container'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName"> Test Name: </label>
            <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
            <button type="submit"> Add Task</button>
           </form>
         </div>
         <TaskLists  deleteItem = {this.deleteItem} todos={this.state.todos}/>
      </div>)
  }
}
  
export default TodoList