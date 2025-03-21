import React from 'react';
//Add email, add emale global
const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <button onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default PostItem;
