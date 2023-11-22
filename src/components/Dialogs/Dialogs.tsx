import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './dialogItem/DialogItem';
import Messages from './messages/Messages';

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Myr' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Volodya' },
        { id: 4, name: 'Vodan' },
    ];

    const messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Nice to meet you, bro!' },
    ];

    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={dialogsData} />
            <Messages messages={messageData} />
        </div>
    );
};

export default Dialogs;
