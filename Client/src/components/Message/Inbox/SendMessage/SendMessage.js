import React, { useState } from 'react'
import useStyle from './Style'
import { useContext } from 'react';
import { chatContext } from '../../../../Context';
import io from 'socket.io-client'
const socket = io.connect("http://localhost:5000");

const SendMessage = () => {
    const [message, setMessage] = useState()
    const { id } = useContext(chatContext);
    const send = () => {
        socket.emit("sendMessage", { message, id });
        setMessage("");
    }
    const classes = useStyle();
    return (
        <div className={classes.sendMessageRoot}>
            <textarea className={classes.sendMessageTextarea} value={message} onChange={(e) => { setMessage(e.target.value) }} rows="5" placeholder='send message' />
            <div >
                <label className={classes.sendMessagePicUpload}>+
                    <input style={{ display: "none" }} type="file" />
                </label>
            </div>
            <button className={classes.sendMessageBtn} onClick={send}>Send Message</button>
        </div>
    )
}

export default SendMessage