import React, {useReducer} from "react";



function TodoList({list, toggleCompleted}){
    

  

  return (
      <div>
            {list.map(todo => 
            <div key = {todo.id} onClick = {() => toggleCompleted (todo.id)}
                    className = {todo.completed ? "completed" : "not-completed"}>
                {todo.item}
                </div>
            )}

      </div>
    
  )
};

export default TodoList;