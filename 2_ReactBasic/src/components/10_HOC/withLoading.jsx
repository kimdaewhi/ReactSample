import React, { useState, useEffect } from 'react'

export default function withLoading(Component) {
    // 함수명이 대문자일 때 리턴할 때 hook 사용하면 에러남...
    // 함수 내에 함수를 이렇게 따로 빼서 사용해야 함.
    const WithLoadingComponent = (props) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setIsLoading(false), 3000);
            return () => clearTimeout(timer);
        }, []);

        return isLoading ? <p>Loading...</p> : <Component {...props}/>;
    };

    return WithLoadingComponent;
}
