import React, { useEffect, useReducer, useState } from 'react'

export default function HookExample3() {
    /* useReducer 예제 */
    // dispatch라는 함수를 이용. 복잡한 상태의 관리가 필요할 떄 사용하면 좋음
    // const [state, dispatch] = useReducer(reducer, initialState); 설명
    //      - state : useReducer를 이용하여 관리되는 새로운 상태.
    //      - dispatch : 리듀서에 액션을 전달하여 상태를 변경하는 함수. dispatch를 호출하면 된다.
    //      - reducer : 사용자 정의 함수로, 액션에 따라 상태를 어떻게 변경할지 정의.
    //      - initialState : 초기상태로, useReducer에 전달.
    const initialState = {count: 0, name: 'jimmy'};

    function reducer(state, action) {
        switch(action.type) {
            case 'reset':
                return initialState;

            case 'increment':
                return { count: state.count + 1, name: 'timmy' };

            case 'decrement':
                return { count: state.count - 1, name: 'amy' };
                
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [action, setAction] = useState({type : ''});

    useEffect(() => {
        console.log("useEffect : " + action.type)
    }, [action.type]);

    return (
        <div>
            <h2>Reducer</h2>
            Count : {state.count}{' '}
            <br/>
            Name : {state.name}{' '}
            <br/>
            <button onClick={()=> {
                setAction({type: 'reset'});
                dispatch({type: 'reset'}); 
            }}>Reset</button>{' '}
            
            <button onClick={()=> {
                setAction({type: 'increment'});
                dispatch({type: 'increment'});
            }}>+</button>{' '}

            <button onClick={()=> {
                setAction({type: 'decrement'});
                dispatch({type: 'decrement'})
            }}>-</button>
        </div>
    )
}
