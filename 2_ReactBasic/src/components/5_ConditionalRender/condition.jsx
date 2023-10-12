import React from 'react'


function UserGreeting(props) {
    return <h1>{props.name && props.name + ','} Welcome back! {Boolean(props.count) && `It's ${props.count} times`} </h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // if(isLoggedIn) {
    //     return <UserGreeting name="harry" count={0}/>;
    // }
    // else {
    //     return <GuestGreeting/>;
    // }
    return isLoggedIn ? <UserGreeting name="Harry" count={0}/> : <GuestGreeting/>;
}

export default function Condition() {
    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}
