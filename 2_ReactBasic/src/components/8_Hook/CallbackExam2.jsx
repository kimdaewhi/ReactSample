import React, { useCallback, useState } from 'react'

export default function CallbackExam2() {
    // useCallback 함수를 사용한 방식.
    // 두 번째 파라미터로 count를 전달하면 count 값이 변경될 때만 함수가 다시 생성된다.
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h3>useCallback 사용한 방식</h3>
            <p>Count : {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
