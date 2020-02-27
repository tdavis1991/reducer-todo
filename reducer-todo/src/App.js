import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducer/index';
import { TOGGLE_COMPLETE_TASK, ADD_TASK } from './reducer/actions';
import './App.css';

const task = {task: '', completed: false};
function App() {
  const [newTodo, setNewTodo] = useState([]);
  const [todo, setTodo] = useState(task)

  const [state, dispatch] = useReducer(todoReducer, initialState);
 

  const handleChange = e => {
    setTodo({
      task: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({type: ADD_TASK, payload: todo})
    console.log(todo)

    setNewTodo([...newTodo, state])
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo.task}
          onChange={handleChange}
          placeholder='...todo'
        />
        {newTodo.map((list, index) => (
          <div key={index}>
            <h3>{list.task}</h3>
          </div> 
        ))}
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}

export default App;
