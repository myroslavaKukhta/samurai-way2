import React, { RefObject, createRef } from 'react';
import s from './Messages.module.css';

type MessageType = {
    id: number;
    message: string;
};

const Message: React.FC<MessageType> = (props) => (
    <div className={s.dialog}> {props.message} </div>
);

type MessagesType = {
    messages: MessageType[];
};




const Messages: React.FC<MessagesType> = (props) => {
    let messagesElements = props.messages.map((message) => (
        <Message key={message.id} id={message.id} message={message.message} />
    ));

    const newMessageElement: RefObject<HTMLTextAreaElement> = createRef();

    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert('hei, fox');
    };

    return (
        <div className={s.messages}>
            {messagesElements}
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;