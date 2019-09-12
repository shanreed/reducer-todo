import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <div className="App">
      <TodoList list ={state.todoList}/>
      <TodoForm dispatch = {dispatch} />
     
    </div>
  );
}

export default App;
