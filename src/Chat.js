import { Avatar} from '@material-ui/core'
import React from 'react'
import './Chat.css';
import {Link} from "react-router-dom"
const Chat = ({photo,name,timestamp,message}) => {
    return (
        <Link to={`/chat/${name}`}>
                <div className="chat">
            <Avatar src={photo}/>
            <div className="chat__info">
            <h2>{name}</h2>
            <p>{message}</p>
             <small>{timestamp}</small>
            </div>
            </div>
        </Link>
    )
}

export default Chat
