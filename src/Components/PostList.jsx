import React from 'react';
import PostItem from './PostItem';

const PostList = ({ remove, posts, title }) => {
    if (!posts.length) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) => (
                <PostItem
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                />
            ))}
        </div>
    );
};

export default PostList;
