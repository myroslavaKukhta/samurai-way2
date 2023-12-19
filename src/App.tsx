import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import state from './redux/state';
import RootStateType from './redux/state';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <div>
                    <Route
                        path={'/dialogs'}
                        render={() => (
                            <Dialogs
                                dialogsData={state._state.dialogsPage.dialogs}
                                messageData={state._state.dialogsPage.messages}
                            />
                        )}
                    />
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                postsData={state._state.profilePage.posts.map((post) => ({
                                    id: post.id,
                                    post: post.post
                                }))}
                            />
                        )}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;