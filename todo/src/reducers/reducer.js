
export const initialState = {
    todoList: [
    { item: 'Learn about reducers', completed: false, id: 3892987589},
    { item: 'Learn about Redux', completed: false, id: 3892987590},
    { item: 'Learn about React', completed: false, id: 3892987591}
    ] }

export const reducer = (state, action) => {
    if(action.type === "ADD TODO") {
        return {
            ...state, 
            todoList: [...state.todoList, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]
        }
    } else if (action.type === "CLEAR TODO"){
        return {
            ...state,
            todoList: state.todoList.filter(todo => !todo.completed)
        };

    }else if (action.type === "TOGGLE COMPLETED"){
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                   if(todo.id === action.payload) {
                       return {
                           ...todo,
                           completed: !todo.completed
                       };
                    }
                       else {
                           return todo;
                       }
                   })
                    
                    
            };  

        }
    }
