import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { date: new Date() };
        // this.handleClick =this.handleClick.bind(this);          // event Delegate같은 의미
    };
    /* 생성자에서 super(porps)를 항상 쓰는 이유 */
    // 부모클래스인 Component의 생성자를 먼저 실행함으로써 자식 클래스인 React 컴포넌트에서 this.props를 사용할 수 있다.
    // 즉, React에서 클래스 컴포넌트를 작성할 때 기본적인 패턴 중 하나이다.

    componentDidMount() {
        console.log('DidMount');
        this.timerID = setInterval(() => this.tick(), 10000);
    };

    componentDidUpdate() {
        console.log('DidUpdate');
    };

    componentWillUnmount() {
        console.log('WillUnmount');
        clearInterval(this.timer);
    };

    tick() {
        // console.log('tick');
        this.setState({date: new Date()});
    }

    // 이벤트를 arrow function으로 생성하면 바인딩하지 않아도 됨.
    handleClick = () => {
        alert(this.state.date);
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello World!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};
