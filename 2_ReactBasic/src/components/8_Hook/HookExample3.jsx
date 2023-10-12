import React, { useState } from 'react'

export default function HookExample3() {
    /* useReducer 예제 */
    /*  React Hook의 상태관리의 강점 중 하나를 보여주는 부분.
        setCount(prev => prev + 1)에서 prev는 알아서 count의 상태를 제어한다.

        만약 const [count2, setCount2] = useState(100);라는 하나의 상태를 더 선언하게 되고
        여기서 setCount2(prev => prev + 1)를 사용하게 되면 알아서 count2의 상태를 조작하게 된다.
     */
    const initialCount = 0;
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Hook Example 3</h2>
            Count : {count}{' '}
            <button onClick={()=> setCount(initialCount)}>Reset</button>{' '}
            <button onClick={()=> setCount(prev => prev + 1)}>+</button>{' '}
            <button onClick={()=> setCount(prev => prev - 1)}>-</button>
        </div>
    )
}
