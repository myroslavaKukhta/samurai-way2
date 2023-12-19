import React, { useRef } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

type PostType = {
    id: number;
    post: string;
};

type PostsDataType = {
    postsData: PostType[];
};

const MyPosts: React.FC<PostsDataType> = ({ postsData }) => {
    const posts = postsData.map((post) => <Post key={post.id} id={post.id} post={post.post} />);
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            alert('hei, samurai');
        }
    };

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;