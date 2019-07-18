import React from 'react';
// import { StyleSheet } from 'react-native';


const TaskLists = (props) => {
  return (
    <ul className = {props.tasklist}>
      {props.todos.map((el, index) =>
        <li key={index}>
          {el}
          <button onClick={() => this.deleteItem(index)}>delete</button>
        </li>)}
    </div>
  )
}


export default TaskLists