import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Chat from './component/Chat/Chat';
import Sidebar from './component/Sidebar/Sidebar';
import Login from './component/Login/Login';
import { useStateValue } from './component/StateProvider/StateProvider';

function App() {
  const [{ user }, dispatch ] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
      <div className="app__body">
        <Router>
          <Switch>
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/">
                <Sidebar />
              </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
