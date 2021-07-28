import React from 'react'
import './LoginHeader.css'
import MenuIcon from '@material-ui/icons/Menu';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
const LoginHeader = () => {
    return (
        <div className="header">
           <div className="header__left">
            <img className="header__image" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""/> 
            {/* <WhatshotIcon className="logo__icon"
            /> */}
             <h1>tinder</h1> 
            </div>  
           <div className="header__right">
             <button >Log In</button>
           </div>
          <MenuIcon className="button" fontSize="large"/>
        </div>

    )
}

export default LoginHeader
