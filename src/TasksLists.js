import React from 'react';
// import { StyleSheet } from 'react-native';
const TaskLists = (props) => {
  return (
    <div>
    <ul>
      {props.todos.map((el, index) =>
        <li key={index}>
          {el}
          <button onClick={() => props.deleteItem(index)}>delete</button>
        </li>)}
        </ul>
    </div>
  )
}
export default TaskLists