import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

type PostType = {
    id: number;
    post: string;
};

// Оголошення типу для масиву постів
type PostsDataType = {
    postsData: PostType[];
};

const MyPosts: React.FC<PostsDataType> = ({ postsData }) => {
    // Мапимо дані постів до компонентів Post
    let posts = postsData.map((post) => <Post key={post.id} id={post.id} post={post.post} />);

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;