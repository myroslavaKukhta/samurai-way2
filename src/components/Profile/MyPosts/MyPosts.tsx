import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props: any) => {
let postsData = [
    {id: 1, post: 'To go'},
    {id: 2, post: 'Went'},
    {id: 3, post: 'Gone'}
]

    let posts = postsData.map(post => <Post id={post.id} post={post.post}/>)

    return (
        <div className={s.postsBlock}>
            <h3>
                my posts
            </h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;