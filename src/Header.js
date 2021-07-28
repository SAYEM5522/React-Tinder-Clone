import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
const Header = ({backButton}) => {
  const history=useHistory();
    return (
        <div className="header">
          {
            backButton?
            (<IconButton>
              <ArrowBackIosIcon fontSize="large" onClick={()=>(
                  history.push(backButton)
              )}/>
            </IconButton>)
            :
            (
              <IconButton>
              <PersonIcon fontSize="large"/>
                </IconButton>
            )
          }
            <Link to="/">
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""/>
            </Link>
          <Link to="/chat">
          <IconButton>
          <ForumIcon fontSize="large"/>
          </IconButton>
          </Link>
     
     
          
        </div>
    )
}

export default Header
