import React from 'react'

export default class HookExample2 extends React.Component {
    /* Class Component를 이용한 예제 */
    // DidMount, DidUpdate를 모두 작성해야 원하는 동작이 가능함.
    // ➡️Mount될 때 한 번, count의 상태값이 바뀔 때 한 번
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times.`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times.`;
    }

    render() {
        return (
            <>
                <div>
                    <h2>Hook Example 2</h2>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me!</button>
                </div>
            </>
        );
    }
}