import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    // ⭐ 비제어(Uncoltrolled) 폼 : React가 컴포넌트의 value를 알지 못함. 단 useRef를 이용하여 컴포넌트의 값이 ref에 담김(?)
    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file : ${fileInputRef.current.files[0].name}`);
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Upload file : {` `}
                    <input type="file" ref={fileInputRef} />
                </label>

                <br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
