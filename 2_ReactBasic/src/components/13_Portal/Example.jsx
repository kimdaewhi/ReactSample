import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"));
}

export default function Example() {
    return (
        <div onClick={() => { console.log("div"); }}>
            {/* 목표 : Dialog의 버튼을 클릭했을 때 모든 Component를 음영으로 덮어야한다. */}
            {/* 하지만 아래 div에 있는 Button이 덮히지 않는다. 어떻게 처리해야 하는가?(물론 Dialog가 div 아래에 있으면 원하는 동작 함...) */}
            <Portal><ThankyouDialog/></Portal>

            <div style={{position: "absolute"}}>
                <button>Button</button>
            </div>
        </div>
    )
}
