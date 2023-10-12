import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function composition() {
    return (
        // ⭐컴포넌트 합성 : 새롭게 정의한 Component에 속성을 다르게 지정하여 렌더링 가능(추상 컴포넌트 개념)
        <div>
            <Welcome name="Sarah"></Welcome>
            <Welcome name="John"></Welcome>
            <Welcome name="Tim"></Welcome>
            <Welcome name="Harry"></Welcome>
        </div>
    )
}
