import React from 'react'
import { useSelector } from 'react-redux';
import Chat from './Chat'
import './Chats.css'
import { selectuser } from './features/userSlice';
const Chats = () => {
    const user=useSelector(selectuser);
    
    return (
        <div>
            <Chat 
           name={user.displayName}
           message="hey!how are you ?"
           timestamp="40 seconds ago"
           photo={user.photo}
           />
               <Chat 
           name="Alif al razi"
           message="hey!how are you ?"
           timestamp="40 seconds ago"
           photo="https://lh3.googleusercontent.com/a-/AOh14GjDTR7Czm5xdJoPAwINsH2wkxx4_rEv-Mn2bRuW=s32-c"
           />
               <Chat 
           name="zawwad-ul-sammi"
           message="hey!how are you ?"
           timestamp="40 seconds ago"
           photo="https://lh3.googleusercontent.com/a-/AOh14Gh-cQ-bO_FV_gPbaTgiAqTTJDGCFcPqCzadPIhb=s32-c"
           />
        </div>
    )
}

export default Chats
