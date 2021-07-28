import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'


import './ChatScreen.css';


const ChatScreen = () => {
    const [input,setInput]=useState("");
    const sendMessage=(e)=>{
        e.preventDefault();
        setInput("")
    }
    const[messages,setMessages]=useState([
        {
            name:"zawwad-ul-sammi",
            img:"https://lh3.googleusercontent.com/a-/AOh14Gh-cQ-bO_FV_gPbaTgiAqTTJDGCFcPqCzadPIhb=s32-c",
            message:"hey waths up!"
        },
        {
            name:"alif al razi",
            img:"https://lh3.googleusercontent.com/a-/AOh14Gh-cQ-bO_FV_gPbaTgiAqTTJDGCFcPqCzadPIhb=s32-c",
            message:"hey waths up!"
        },
        {
            img:"https://lh3.googleusercontent.com/a-/AOh14Gh-cQ-bO_FV_gPbaTgiAqTTJDGCFcPqCzadPIhb=s32-c",
            message:"hey waths up!"
        }
    ]);
    return (
        <div className="chatscreen">
            <p>You Matched With Zawwad-ul-sammi on 14/10/2020</p>
           
            {messages.map((message)=>(
                    
                       
                       message.name?(
                        <div className="chatscreen__info">
                        <Avatar src={message.img}/>
                       <p>{message.message}</p>
                       </div>
                       ) :(
                           <div className="chatscreen__info">
                            <p className="textUser">{message.message}</p>
                           </div>
                       )    
            ) )}
            <div className="chatscreen__input" >
                <form>
                    <input placeholder="Type a message.." className="chatscreen__inputfield"
                     onChange={(e)=>(setInput(e.target.value))} />
                    <button className="chatscreen__inputbutton" onClick={sendMessage} >
                        send
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ChatScreen
