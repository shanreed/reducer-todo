import React, {useState, useReducer} from "react";




function TodoForm({addTodo, clearTodo}){
    const [newTodo, setNewTodo] = useState("");
    

    const handleChanges = e => {
        // e.preventDefault
        setNewTodo(e.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo(""); 
    }

    const handleClearTodo = (event) => {
        event.preventDefault();
        clearTodo();
    }


  return (
    <>
    <form onSubmit = {handleSubmit}>
        <input type = "text"
               name = "newTodo"
               value = {newTodo}
               onChange = {handleChanges} />
        <button type = 'submit'>
            ADD TODO
        </button>
        <button type = "submit" onClick = {handleClearTodo}>Clear Completed>
            Clear Todo
        </button>
    </form>
    </>
  );
};

export default TodoForm;