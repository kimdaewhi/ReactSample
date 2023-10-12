import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 여기서 state를 초기화하는데, 기본값을 themes.light로 초기화함.
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState((prev) => ({
                theme: prev.theme === themes.dark ? themes.light : themes.dark
            }));
            
        }
    }
    
    render() {
        return (
        <div>
            <ThemeContext.Provider value={this.state.theme}>
                {/* 그래서 여기서는 지정한 테마(light)가 먹는것이고(값 설정할 때 value 사용) */}
                <ThemedButton changeTheme={this.toggleTheme}/>
                <ThemeContext.Consumer>
                    {theme => (<div style={{height: 300, width: 300, backgroundColor: theme.background}}></div>)}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
            <br/>
            {/* Provider 바깥에서는 기본값 지정 테마(dark)가 먹는 것임. */}
            <ThemedButton/>
        </div>
        )
    }
}
