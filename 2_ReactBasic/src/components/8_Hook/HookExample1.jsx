import React, { useEffect, useState } from 'react'

export default function HookExample() {
    /* Hook 사용 규칙 */
    // 1. 최상위에서만 Hook을 호출해야함(for, if 등 중첩된 함수 내에서 실행 x)
    // 2. Functional Component(rfc)와 custom hook 내에서만 호출해야함
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀 Update
        document.title = `You clicked ${count} times.`
    });

    useEffect(() => {
        // useEffect 두 번째 인자에 변수를 지정하면 해당 변수(여기서는 count2) 상태가 변경될 때만 호출된다.
        // 때문에 Click me 버튼을 클릭하여도 alert이 발생하지 않는다.
        alert("count2 has changed");
    }, [count2]);

    return (
        <>
            <div>
                <h2>Hook Example 1</h2>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <br/>
                <p>And This is Second Count : {count2}</p>
                <button onClick={() => setCount2(count2 + 1)}>Click me2</button>
            </div>
        </>
    );
}
