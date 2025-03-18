import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const FormPost = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        console.log(create);
        create(newPost);
        setPost({ title: '', body: '' });
    };

    return (
        <div>
            <form>
                {/* Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                    type="text"
                    placeholder="Название поста"
                />
                {/* Неуправляемый компонент*/}
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default FormPost;
