import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }



  // <div className = "navbar">
  // <a  href = "">Home</a>
  // <a href = "">Contact</a>
  // <a href = "">Paperwork</a>
  // <a href = ""> About</a>
  // </div>



  // <ul>
  // <li>firstname</li>
  // <li>lastname</li>
  // <li>email</li>
  // <li>phonenumber</li>
  // </ul>


  handleChange = event => {
    event.preventDefault();
    this.setState({
      currentToDo: event.target.value
    })
    //set state for the current todo
    console.log(event.target.value);
  }



  
  addItem = event => {
   if(currentToDo != ""){
console.log("no answer")

    
   }

  
   }
   this.setState({

    todos: event.target.value
   })

   if(currentToDo = ""){
    console.log(todos.push(currentToDo)

    //set state for the todo array and build that array with the currentTodo

    event.preventDefault();
    
  }


  render() {
    console.log(this.state.todos);
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName"> Test Name: </label>
          <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
          <button type="submit"> Add Task</button>
        </form>
      </div>
    )
  }
}

export default TodoList;