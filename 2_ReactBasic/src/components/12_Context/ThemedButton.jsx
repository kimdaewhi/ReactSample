/* rcc
import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext';

class ThemedButton extends Component {
    render() {
        let props = this.props;
        let theme = this.context;           // React에서 제공하는 키워드. 클래스 컴포넌트에서 사용되는 방식으로, ThemeContext 객체를 사용하기 위한 방법이다.

        return (
            <button 
                {...props}
                onClick={props.changeTheme}
                style={{ backgroundColor: theme.background, color: theme.foreground }}>Button</button>
        )
    }
}

// ⭐ThemedButton 컴포넌트에서 ThemeContext를 사용하겠다고 선언하는 부분.
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
*/


// rfc
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function ThemedButton(props) {
    const theme = useContext(ThemeContext);

    return (
        <button 
            {...props}
            onClick={props.changeTheme}
            style={{ backgroundColor: theme.background, color: theme.foreground }}>Button</button>
    );
}