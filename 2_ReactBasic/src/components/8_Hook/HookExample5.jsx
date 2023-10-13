import React , { useState, useEffect, createContext, useContext }from 'react'


const AuthContext = createContext();

export default function HookExample5() {
    const [user, setUser] = useState(null);

    // 사용자 로그인 함수
    const login = (ID) => {
        setUser({username: ID});
    };

    // 사용자 로그아웃 함수
    const logout = () => {
        setUser(null);
    };

    // log
    useEffect(() => {
        if(user) {
            console.log(user.username);
        }
    }, [user]);
    
    return (
        <div>
            <h2>Hook Example 5</h2>

            <AuthContext.Provider value={{ user, login, logout }}>
                <Header/>
                <Main/>
                <Footer/>
            </AuthContext.Provider>
        </div>
    );
}


function Header() {
    const auth = useContext(AuthContext);

    // 1. input으로 입력된 사용자 ID를 useState를 통해서 관리
    // 2. Login / Logout 버튼을 클릭했을 때 useContext를 이용한 공유 자원(?)을 사용함.
    const [loginID, setLoginID] = useState("");

    const handleInputIDChange = (event) => {
        setLoginID(event.target.value);
    };

    const handleLogin = () => {
        auth.login(loginID);
        setLoginID("");
    }

    return (
        <header>
        <h1>useContext Example</h1>
        <input
            type="text"
            style={{marginRight: "5px"}}
            onChange={handleInputIDChange}
            value={loginID}/>
            { auth.user ? 
                ( <button onClick={() => auth.logout()}>Logout</button>) : ( <button onClick={handleLogin}>Login</button>
            )}
        </header>
    );
}

function Main() {
    // useContext를 사용하여 컨텍스트의 값을 가져옴.
    const auth = useContext(AuthContext);

    return (
        <main>
            <h2>Welcome, {auth.user ? auth.user.username : "Guest"}</h2>
            {auth.user && <p>You are logged in.</p>}
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>@ 2023 My App</p>
        </footer>
    );
}
