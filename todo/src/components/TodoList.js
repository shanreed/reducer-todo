import React, {useReducer} from "react";



const TodoList = ({list}) => {
    

  

  return (
      <div>
            {list.map(todo => 
            <div>
                {todo.item}
                </div>
            )}

      </div>
    
  )
};

export default TodoList;