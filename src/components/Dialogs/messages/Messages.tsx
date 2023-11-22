import React from 'react';
import s from './Messages.module.css';

type MessageType = {
    id: number;
    message: string;
};

const Message = (props: MessageType) => (
    <div className={s.dialog}> {props.message} </div>
);

type MessagesType = {
    messages: MessageType[];
};

const Messages = (props: MessagesType) => {
    let messagesElements = props.messages.map(message => (
        <Message message={message.message} id={message.id} key={message.id} />
    ));

    return <div className={s.messages}>{messagesElements}</div>;
};

export default Messages;