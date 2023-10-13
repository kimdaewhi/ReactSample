import React, { useState } from 'react'

export default function CallbackExam1() {
    /* useCallback
        # 콜백 함수를 메모이제이션하는 역할을 한다.
            ※ 메모이제이션 : 이전에 계산한 값을 저장하고 같은 입력값이 다시 들어올 때 미리 계산된 값을 반환하는 기술.
        # React 컴포넌트는 렌더링될 때마다 함수나 객체를 새로 생성하는데, 이는 불필요한 성능 손실을 초래할 수 있다.
        # 때문에 이러한 성능 문제를 해결하기 위해 useCallback을 사용한다.
     */

    
    // useCallback 함수를 사용하지 않은 방식. 매 렌더링 시에 새로운 함수를 생성하게 된다.
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>useCallback 사용하지 않은 방식</h3>
            <p>Count : {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
