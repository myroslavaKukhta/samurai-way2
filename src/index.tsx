import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createState } from './redux/state';

const state = createState();
const postsData = state.postsData;
const dialogsData = state.dialogsData;
const messageData = state.messageData;

ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messageData={messageData} />,
    document.getElementById('root')
);