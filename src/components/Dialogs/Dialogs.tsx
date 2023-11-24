import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './dialogItem/DialogItem';
import Messages from './messages/Messages';

type DialogItemType = {
    id: number;
    name: string;
};

type MessageType = {
    id: number;
    message: string;
};

interface DialogMessageType {
    dialogsData: DialogItemType[];
    messageData: MessageType[];
}

const Dialogs: React.FC<DialogMessageType> = ({ dialogsData, messageData }) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={dialogsData} />
            <Messages messages={messageData} />
        </div>
    );
};

export default Dialogs;
