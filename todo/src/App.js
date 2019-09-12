import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD TODO", payload: newTodo });

  };

  const toggleCompleted = (id) => {

    dispatch( { type: "TOGGLE COMPLETED", payload: id});

  };

  const clearTodo = () => {
    dispatch( { type: "CLEAR TODO" });
  };


  console.log(state)
  return (
    <div className="App">
      <TodoList toggleCompleted = {toggleCompleted} list ={state.todoList}/>
    <TodoForm addTodo = {addTodo} clearTodo = {clearTodo} />
     
    </div>
  );
}

export default App;
