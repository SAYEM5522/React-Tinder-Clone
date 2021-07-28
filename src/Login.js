import React
 from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import LoginHeader from './LoginHeader';


const Login = () => {

  const login=()=>{
    auth.signInWithPopup(provider).then((person)=>{
    }).catch((error)=>{
      alert(error.message)
    })
  }
   const url="https://tinder.com/static/build/m/b07fe760ab4714aa3e932a15657494e5.webp"
    return (
        <div className='login' style={{backgroundImage:`url(${url})`}} >
          <div className="gradient"></div>
          <LoginHeader/>
          <div className="login__info">
            <h1>
              Match.Chat.Date.
            </h1>
            <button className="button__info" onClick={login}>create acount</button>
          </div>
        </div>
    )
}

export default Login
