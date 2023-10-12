import React from 'react'

export default function ListAndKey() {
    // const numbers = [ 1, 2, 3, 4, 5 ];
    // return (
    //     <div>
    //         <ul>
    //             {numbers.map((item) => (
    //                 <li key={item.toString()}>{item}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    const todos = [
        { id: 1, text: "Drink water"},
        { id: 2, text: "Take a shower"},
        { id: 3, text: "Go to work"},
        { id: 4, text: "Watch the footbal"},
        { id: 5, text: "Traning"},
    ];

    const Item = (props) => {
        return (
            <li>
                {props.id}
                {` ` + props.text}
            </li>
        );
    };

    const todoList = todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text}/>
    ));

    return (
        <>{todoList}</>
    );
}
