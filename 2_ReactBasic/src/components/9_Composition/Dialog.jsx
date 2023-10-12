import React, { useState } from 'react'

export default function Dialog(props) {
    const [isOpen, setIsOpen] = useState(false);
        
    return (
        <>
            {/* 기본 버튼 : 클릭시 isOpen 상태 변경 */}
            <button onClick={() => setIsOpen(true)}>Open</button>

            {/* isOpen == true, 스타일이 적용된 모달 출력 */}
            {isOpen && <div
                style={{
                    position: "absolute",
                    zIndex: 99,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid black",
                    padding: 24,
                    backgroundColor: "white",
                }}
            >
                {/* type 체크를 통한 다양한 상황을 체크하여 컴포넌트 렌더링*/}
                { typeof(props.title) === "string" ? <h1>{props.title}</h1> : props.title}
                { typeof(props.description) === "string" ? <h5>{props.description}</h5> : props.description }
                { typeof(props.description) === "string" ? (
                    <button 
                        style={{
                            backgroundColor: "red",
                            color:"white",
                        }}
                        onClick={() => setIsOpen(false)}>
                            {props.button}
                    </button>) : 
                    <div onClick={() => setIsOpen(false)}>{props.button}</div>
                }
            </div>}

            {/* isOpen == true, 모달 외의 배경을 어둡게 지정 */}
            {isOpen && <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: "lightgray",
                }}>
            </div>}
        </>
    )
}
