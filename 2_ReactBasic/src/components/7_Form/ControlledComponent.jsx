import React, { useState } from 'react'

export default function ControlledComponent() {
    // ⭐ 상태 관리(Controlled) 폼 : 사용자의 입력을 기반으로 자신의 state(여기서는 name, essay, flavor)를 관리하고 업데이트함.
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");
    const [flavor, setFlavor] = useState("coconut");

    function handleChange(event) {
        const name = event.target.name;
        if(name === 'name') {
            setName(event.target.value);
        }
        else if(name === 'essay') {
            setEssay(event.target.value);
        }
        else {
            setFlavor(event.target.value);
        }
    }

    // function handleNameChange(event) {
    //     setName(event.target.value);
    // };

    // function handleEssayChange(event) {
    //     setEssay(event.target.value);
    // };

    // function handleFlavorChange(event) {
    //     setFlavor(event.target.value);
    // };


    function handleSubmit(event) {
        alert('name : ' + name + "\nEssay : " + essay + "\nFlavor : " + flavor);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Ex1. Input */}
            <label>Name : {` `}
                <input name="name" type="text" value={name} onChange={/* handleNameChange */handleChange} />
            </label>
            <input type="submit" value="Submit" />

            <br/><br/>
            {/* Ex2. TextArea */}
            <label>Essay : {` `}
                <textarea name="essay" value={essay} onChange={/* handleEssayChange */handleChange} />
            </label>
            <input type="submit" value="Submit" />

            <br/><br/>
            {/* Ex2. Select */}
            <label>
            Pick your favorite flavor : {` `}
            <select name="flavor" value={flavor} onChange={/* handleFlavorChange */handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
    
}
