import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
    return (
        <Dialog 
            /* 다음과 같은 방식으로 props를 범용적으로 지정 가능함*/
            /* title={<h1 style={{color: "purple"}}>Thanks</h1>} */
            /* title={<button style={{color: "purple"}}>Thanks</button>} */
            title="Thanks"
            description="It is honor to meet you!" 
            /* button="OK" */
            button={<button style={{backgroundColor: "blue", color:"white"}}>Close</button>}
        />
    )
}
