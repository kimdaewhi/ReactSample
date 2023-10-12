import React from 'react'

// Context
// context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있음.
// 컴포넌트의 상태 관리 시 계층 구조가 복잡해지면 어느 단계에서 상태를 전달하고, 변경하고 있는지가 불분명해짐.
// >> 이러한 상황에서Context를 사용하면 특정 컴포넌트를 건너뛰고 데이터를 전달 가능함.(Props drilling 해소)
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

// ⭐Context 객체 생성 - 두 가지 요소를 포함하는 객체가 반환됨
// 1. Provider : Context의 값을 설정하는 컴포넌트. 이 컴포넌트를 통해 하위 컴포넌트에게 값을 전달할 수 있음.
// 2. Consumer : Context의 값을 읽어오는 컴포넌트. 이 컴포넌트를 통해 Context의 값을 사용할 수 있음.
export const ThemeContext = React.createContext(themes.dark);




