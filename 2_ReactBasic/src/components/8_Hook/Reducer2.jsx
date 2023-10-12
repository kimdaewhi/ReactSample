import React, { useReducer } from 'react'
    
export default function Reducer2() {

    // TodoList
    const initialState = {
        todos: [],
        newTodo: '',
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);

    function todoReducer(state, action) {
        switch(action.type) {
            // todo 추가(button)
            case 'ADD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, {text: action.payload, completed: false}],
                }
            
            // todo 완료목록 체크(checkBox)
            case 'TOGGLE_TODO': 
                return {
                    ...state,
                    todos: state.todos.map((todo, index) =>
                        index === action.payload ? { ...todo, completed: !todo.completed } : todo
                    ),
                };
            
            // todo 업데이트(input)
            case 'UPDATE_NEW_TODO':
                return {
                    ...state,
                    newTodo: action.payload,
                };

            // todo 삭제(button)
            case 'DELETE_TODO':
                return {
                    ...state,
                    todos: state.todos.filter((_, index) => index !== action.payload),
                };

            default:
                return state;
        }
    };


    return (
        <div>
            <h2>Reducer Todo List</h2>

            <input 
                type="text"
                style={{marginRight: "5px",}}
                placeholder="Add a new task..."
                value={state.newTodo}
                onChange={(e) => {
                    dispatch({type: 'UPDATE_NEW_TODO', payload: e.target.value});
                }}
            />
            
            <button
                onClick={() => {
                    dispatch({type: 'ADD_TODO', payload: state.newTodo});
                }}>
                Add</button>
            
            <h3 style={{textAlign: "left", marginLeft: "5px", color: "gray"}}>Todo List</h3>

            <ul style={{textAlign: "left"}}>
                { state.todos.map((todo, index) => (
                    <li key={index} style={{margin: "3px"}}>
                        <input 
                            type="checkbox"
                            style={{marginLeft: "5px"}}
                            checked={todo.completed}
                            onChange={() => dispatch({type: 'TOGGLE_TODO', payload: index})}
                        />
                        {todo.text}
                        <button 
                            style={{marginLeft: "20px"}}
                            onClick={() => dispatch({type: 'DELETE_TODO', payload: index})}>DELETE
                        </button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
