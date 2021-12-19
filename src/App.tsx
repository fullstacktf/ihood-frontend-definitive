import React, { useState } from 'react';
import './App.css';
import HomeSignup from './components/Home/HomeSignup';
import HomeLog from './components/Home/HomeLog';
import {EnterInvitation} from './components/EnterInvitation/EnterInvitation';
import UserProfile from './components/UserProfile/UserProfile';
import MasterProfile from './components/MasterProfile/MasterProfile';

interface User {
  nombre: string;
  email: string;
  password: string;
  community_id?: number;
  role_id: number;
  checked: boolean
}

function App() {
  const[user, setUser] = useState<User>()

  const [isLogin, onGoHomeLog] = useState()

  if(!user && isLogin){
    return (
      <div className="App">
        <HomeLog />
      </div>
    )
  }
    if (!user) {
      return (
        <div className="App">
          <HomeSignup onSignup={setUser} onGoHomeLog={onGoHomeLog}/>
        </div>
      )
    }
    
    if(!user.community_id && user.checked === true) {
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
          <EnterInvitation />
        </div>
        )
    }

    if(user && isLogin && user.community_id && user.role_id === 1) {
      return (
        <div className="App">
          <h1>Master-Profile</h1>
          <MasterProfile />
        </div>
      )
    }
    return (
    <div className="App">
          <UserProfile />
    </div>
  );
}

export default App;
