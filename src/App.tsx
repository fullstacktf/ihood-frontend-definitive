import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

interface User {
  nombre: string;
  email: string;
  password: string;
  community_id?: number;
  role_id: number;
  checked: boolean
}


function App() {
  const[user,setUser] = useState<User>()
    if (!user) {
      return (
        <div className="App">
          <Home />
          <Login onLogin={setUser}/>
        </div>
      )
    }
    if(!user.community_id && user.checked) {
      return (
        <div className="App">
          <h1>Create-Community-Profile</h1>
          {/* <Create-Community-Profile /> */}
        </div>
      )
    }
    if(!user.community_id) {
      return (
        <div className="App">
          <h1>Invitation-Profile</h1>
          {/* <Invitation-Profile /> */}
        </div>
        )
    }
    if(user.community_id && user.role_id === 1) {
      return (
        <div className="App">
          <h1>Master-Profile</h1>
          {/* <Router>
            <NavBar>
            <Master-Profile />
          </Router> */}
        </div>
      )
    }
    return (
    <div className="App">
      <h1>Neighbor-Profile</h1>
      {/* <Router>
        <NavBar>
        <Profile />
      </Router> */}
    </div>
  );
}

export default App;
