// import React, { Component } from 'react';
// import TaskLists from './TasksLists'

// class TodoList extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       todos: [], //array of strings
//       currentToDo: "",
//     }
//   }

//   handleChange = event => {
//     event.preventDefault();

//     this.setState({
//       currentToDo: event.target.value,
//     })

//   }

//   addItem = event => {
//     event.preventDefault()
//     //    if(currentToDo != ""){
//     // console.log("no answer")
//     // }
//     this.setState({ todos: [...this.state.todos, this.state.currentToDo], currentToDo: "" })


//   }



// //   deleteItem = (index) => {
// //     console.log(index)

// //     this.setState({
// //       todos: this.state.todos.filter((el) => {

// //         // return el == idx;
// //         // return el !==index;
// //         return el.splice[el.length];
// //       })
// //     })


// // this.setState({

// //   todos:this.state.todos.filter((index) => {

// //     return index!= key;
// //   })
// // })



// //   }



// deleteItem = idx => {
//   const sepItems = this.state.todos.filter( (el, index) => {

//     return index != idx;
//   })
//   this.setState({
//     todos: sepItems, 
//   })
// }





//   //filter for elements whose index is NOT the index we are deleting


//   //find out what the current todo is
//   // add that toDo to the Array via this.setState()


//   // todos: event.target.value,
//   // addItem: event.target.value}


//   //whatever the todo is// ...todos, currentTodo }) sort of like .push() //this.state.todos.push() is a no no. We dont directly change the state, we always call this.setState()

//   //set state for the todo array and build that array with the currentTodo




//   render() {
//     // console.log(this.state);
//     return (
//       <div>
//         <div className='container'>
//           <form onSubmit={this.addItem}>
//             <label htmlFor="taskName"> Test Name: </label>
//             <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
//             <button type="submit"> Add Task</button>

           
//            </form>
//          </div>
//          <TaskLists  deleteItem = {props.deleteItem} todos={this.state.todos}/>  </div>)


       


//   // deletelist  = index => {<li key  = {index.key} onClick = {() =>
//   //   this.props.deleteItem(index.key) }>
//   //   {index.text}
//   //   </li> 
//   //   }
    

//   }

// }








//       // <div>
//       //   <div className='container'>
//       //     <form onSubmit={this.addItem}>
//       //       <label htmlFor="taskName"> Test Name: </label>
//       //       <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
//       //       <input onChange={this.addItem} name="additems" type="button" />
//       //       <button type="submit"> Add Task</button>

           
//       // //     </form>
//       // //   </div>
//       //   <ul className="list1">
//       //     {this.state.todos.map((el, index) =>
//       //       <li key={index}>
//       //         {el}
//       //         <button onClick={() => this.deleteItem(index)}>delete</button>
//       //       </li>)}
//       //   </ul>
//       // </div>


      
// //     )
// //   }
// // }








// // class TasksList extends Component {
// //   constructor() {
// //     super();
// //     this.state.props = {
// //   listname: "list1"



// //     render() {
// //       console.log(this.state);
// //       return (
// //         <div>
// //         <div className='container'>
// //           <form onSubmit={this.addItem}>
// //             <label htmlFor="taskName"> Test Name: </label>
// //             <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
// //             <input onChange = {this.addItem} name = "additems" type = "button" />
// //            <button type="submit"> Add Task</button>

// //            {/* <input onChange = {this.deleteItem} name = "delete" type = "text" placeholder = "delete task"/> */}
// //             {/* <button onClick = {this.addItem}>
// //             {this.state.isTodoliston? "True" : "false"}</button> */}
// //           </form>
// //           </div>
// //           <ul className = "list1">
// //             {this.state.todos.map(el =>
// //               <li key={el}>
// //                 {el}
// //                 <button onClick={this.deleteItem}>delete</button>
// //               </li>)}
// //           </ul>
// //         </div>
// //       )
// //     }


// //   }
// //     }
// //   }





// export default TodoList;


































import React, { Component } from 'react';
import TaskLists from './TaskList'
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