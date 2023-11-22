import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

type DialogItemType = {
    id: number;
    name: string;
};

type DialogsItemType = {
    dialogs: DialogItemType[];
};

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const DialogsItem = (props: DialogsItemType) => {
    let dialogsElements = props.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
    );
};

export default DialogsItem;