import React, { useReducer, useRef, useState } from 'react'
import './Reducer2.css'
    
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
                    newTodo: '',        // input Text를 clear하기 위해서 useState로 별도외 상태 관리가 필요없이 여기서 해결이 가능함!!!
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

    const [isChecked, setIsChecked] = useState(false);
    const [taskContent, setTaskContent] = useState("");
    const handleRowClick = (index) => {
        const selectedTodo = state.todos[index];

        setIsChecked(selectedTodo.completed);
        setTaskContent(selectedTodo.text);

        console.log("isChecked.current : " + isChecked.current + ", taskContent.current : " + taskContent.current);
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
            
            <h3 style={{marginLeft: "5px", color: "gray"}}>Todo List</h3>
            
            <div className="table-center">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "50px"}}>Chk</th>
                            <th style={{width: "300px"}}>Task</th>
                            <th style={{width: "100px"}}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { state.todos.map((todo, index) => (
                            <tr key={index} onClick={() => handleRowClick(index)}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        style={{marginLeft: "5px"}}
                                        checked={todo.completed}
                                        onChange={() => dispatch({type: 'TOGGLE_TODO', payload: index})}
                                    />
                                </td>
                                <td style={{textAlign: "left"}}>
                                    {todo.text}
                                </td>
                                <td>
                                    <button 
                                        style={{alignItems: "center"}}
                                        onClick={() => dispatch({type: 'DELETE_TODO', payload: index})}>DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Task 세부사항</h3>
                <p><b>작업 내용 : </b>{taskContent}</p>
                <p><b>완료 여부 : </b>{isChecked === false ? "미완료" : "완료"}</p>
            </div>

        </div>
    )
}
