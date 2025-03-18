import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import FormPost from './Components/FormPost';
import MySelect from './Components/UI/select/MySelect';
import MyInput from './Components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'baJavascript 1', body: 'bDescription' },
        { id: 2, title: 'cJavascript 2', body: 'dDescription' },
        { id: 3, title: 'dJavascript 3', body: 'c   Description' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [sercheQuery, setSerchQuery] = useState('');

    const opions = [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
    ];

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    function getSortedPosts() {
        console.log('Функция отработала!');
        if (selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort])
            );
        }
        return posts;
    }

    const sortedPosts = getSortedPosts();

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            <FormPost create={createPost} />
            <hr style={{ margin: '15px 0' }}></hr>
            <div>
                <MyInput
                    value={sercheQuery}
                    onChange={(e) => setSerchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    options={opions}
                    defaultValue={'Выбирите'}
                    value={selectedSort}
                    onChange={(sort) => sortPosts(sort)}
                />
            </div>

            {posts.length !== 0 ? (
                <PostList
                    remove={removePost}
                    posts={sortedPosts}
                    title="Список постов"
                />
            ) : (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
                </div>
            )}
        </div>
    );
}

export default App;
