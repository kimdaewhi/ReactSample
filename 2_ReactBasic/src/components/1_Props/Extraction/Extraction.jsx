import React from 'react'


const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};


function formatDate(date) {
    return date.toLocaleDateString();
}

// ⭐컴포넌트 추출 : 재사용성을 높이기 위해서 컴포넌트를 나누어 여러개의 작은 컴포넌트로 쪼개는 것...?
function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
};

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
};

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />

            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


export default function Extraction() {
    return (
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
    )
}
