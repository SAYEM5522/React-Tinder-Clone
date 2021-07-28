import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import { login, selectuser } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';

const Tinder = () => {
    const dispatch=useDispatch();
    const user=useSelector(selectuser);
   useEffect(()=>{
        auth.onAuthStateChanged((authuser)=>{
            if(authuser){
                dispatch(
                    login({
                      uid: authuser.uid,
                      displayName: authuser.displayName,
                      email: authuser.email,
                      photo: authuser.photoURL,
                    })
                  );
            }
        })
    })
    return (
        <div>
            {
                user? <App/>:<Login/>
            }
        </div>
    )
}

export default Tinder
