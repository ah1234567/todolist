import React from 'react';

 const TodoForm = (props)=> {
        return (

        <div className='container'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName"> Test Name: </label>
            <input onChange={this.handleChange} name="taskname" type="text" placeholder="Add todo here" />
            <input onChange={this.addItem} name="additems" type="button" />
            <button type="submit"> Add Task</button>
          </form>
        </div>
        )
    }



  export default TodoForm
