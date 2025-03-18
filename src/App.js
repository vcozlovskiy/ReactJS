import React, { useState, useRef, useMemo } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import FormPost from './Components/FormPost';
import MySelect from './Components/UI/select/MySelect';
import MyInput from './Components/UI/input/MyInput';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'baJavascript 1', body: 'bDescription' },
        { id: 2, title: 'cJavascript 2', body: 'dDescription' },
        { id: 3, title: 'dJavascript 3', body: 'c   Description' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        console.log('Функция отработала!');

        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }

        return posts;
    }, [filter.sort, posts]);

    const sortedAndSerchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title
                .toLocaleLowerCase()
                .includes(filter.query.toLocaleLowerCase())
        );
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <FormPost create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }}></hr>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                remove={removePost}
                posts={sortedAndSerchedPosts}
                title="Список постов"
            />
        </div>
    );
}

export default App;
