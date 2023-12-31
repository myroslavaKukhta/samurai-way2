import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost} from "./redux/state";
import state from './redux/state';
import { addPost } from './redux/state';

type AppProps = {
    state: state;
    addPost: (messageData: PostType) => void;
};

ReactDOM.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
);