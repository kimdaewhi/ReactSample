import React from 'react'
import withLoading from './withLoading';

function Button() {
    /* [HOC]
        1. 고차 컴포넌트(HOC, Higher Order Component)는 컴포넌트 로직을 재사용하기 위한 React의 고급 기술.(React API의 일부가 아님.)
            >> 단순하게 말하면 컴포넌트를 받아서, 새로운 컴포넌트를 반환하는 함수.
    */
    return <button>Button</button>;
};

// withLoading에 Button 컴포넌트를 넘김
export default withLoading(Button);
