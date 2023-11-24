import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

// Оголошення типів для об'єкта поста
type PostType = {
    id: number;
    post: string;
};

// Оголошення типів для об'єкта діалогу
type DialogItemType = {
    id: number;
    name: string;
};

// Оголошення типів для об'єкта повідомлення
type MessageType = {
    id: number;
    message: string;
};

// Оголошення типів для пропсів компонента App
type AppProps = {
    postsData: PostType[];
    dialogsData: DialogItemType[];
    messageData: MessageType[];
};

const App: React.FC<AppProps> = ({ postsData, dialogsData, messageData }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData} messageData={messageData} />} />
                    <Route path='/profile' render={() => <Profile postsData={postsData} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;