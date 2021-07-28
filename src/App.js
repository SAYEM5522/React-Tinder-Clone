import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chats from './Chats';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';
import ChatScreen from './ChatScreen';
function App() {

  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
          <Header backButton="/chat"/>
          <ChatScreen/>
          
          </Route>
          <Route path="/chat">
           <Header backButton="/"/>
           <Chats/>
          </Route>
          <Route path="/">
           <Header/>
           <TinderCards/>
           <SwipeButton/>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
