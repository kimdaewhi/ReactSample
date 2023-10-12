import React from 'react'
    
export default function Event() {

    const handleClickBubble = () => {
        console.log("handleClickBubble");
    };

    const handleClickCapture = () => {
        console.log("handleClickCapture");
    };

    const handleClickCapture2 = () => {
        console.log("handleClickCapture2");
    };

    const handleButtonClick = (e) => {
        
        console.log("handleButtonClick");
    };

    const handleButtonMouseLeave = (e) => {
        console.dir(e);
        console.log("handleButtonMouseLeave");
    };

    return (
        // 순서 : Capture >> Capture2 >> ButtonClick >> Bubble
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick} onMouseLeave={handleButtonMouseLeave}>Button</button>
            </div>
        </div>
    )
}
