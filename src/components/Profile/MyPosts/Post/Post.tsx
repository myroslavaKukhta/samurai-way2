import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    post: string;
    id: number
};
const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-tp542ZY6tGvBcoUVBM83HVL1jD3XAleg10rgVXz&s' alt='ava'></img>
      { props.post }
      <div>
        <span>
          like

          </span>
      </div>
    </div>
  )
}

export default Post;