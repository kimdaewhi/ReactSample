import React, { useRef, useState } from 'react'

export default function HookExample4() {
    /* < useState와 useRef의 차이 >
        useState를 이용한 상태 관리에서는 상태가 변경될 때 컴포넌트가 리렌더링됨.
        이것은 컴포넌트의 가상 DOM을 다시 그리고, 변경된 상태를 화면에 반영하는 프로세스임.

        하지만 useRef는 컴포넌트의 리렌더링과 관련이 없다. 
        즉 useRef로 저장한 변수 값을 변경해도 컴포넌트가 다시 그려지지 않는다....는 아니고 chatGPT가 잘못 알려줌.

        => useRef를 사용한 변수의 변경은 실제로 컴포넌트의 리렌더링과는 관련이 없지만 React 컴포넌트가 상태 변화를 감지하고 화면을 업데이트함.

        어쨌든 useRef는 화면에 리렌더링 되지는 않지만 지속적으로 상태를 추적해야 하는 변수들을 관리할 때 사용한다.
     */
    const clickCount = useRef(0);
    const clickCount2 = useRef(0);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleButtonClick = () => {
        clickCount.current += 1;

        setCount(clickCount.current);
    };

    const increment = () => {
        setCount2(count2 + 1);
        console.log(count2);
    };

    const incrementRef = () => {
        clickCount2.current = clickCount2.current + 1;
        console.log(clickCount2.current);
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <button onClick={handleButtonClick}>클릭</button>
            <p>버튼 클릭 횟수(useState) : {count}</p>
            <p>버튼 클릭 횟수(useRef) : {clickCount.current}</p>

            <hr/>

            <p>Count2<b>(useState)</b> : {count2}</p>
            <button onClick={increment}>Increment</button>

            <hr/>

            <p>Count2<b>(useRef)</b> : {clickCount2.current}</p>
            <button onClick={incrementRef}>incrementRef</button>


        </div>
    )
}
