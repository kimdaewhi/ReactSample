import React, { useEffect, useState } from 'react'
import Comments from './Comments'

const commentList = [
    {title: "comment1", content: "message1", likes: 1},
    {title: "comment2", content: "message2", likes: 2},
    {title: "comment3", content: "message3", likes: 3},
];

export default function Memo() {
    /* [Memoization이란?] */
    // 렌더링 시 동일한 props로 동일한 결과를 받았을 때 결과를 래핑하여 성능을 향상시킴(?)
    // Profiler API 사용하여 진단 가능... onRender??? (CommentItem 참고)
    const [comments, setComments] = useState(commentList);
    const [likes, setLikes] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setComments((prevComments) => [
                ...prevComments, 
                {
                    title: `comment${prevComments.length + 1}`, content: `message${prevComments.length + 1}`, likes: prevComments.length + 1
                },
            ]);
            setLikes((prevLieks) => prevLieks + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <Comments commentList={comments}/>
    );
}
