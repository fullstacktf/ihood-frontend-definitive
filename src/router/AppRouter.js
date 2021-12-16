import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignIn} from '../components/SignIn/pages/SignIn';
import {Invite} from '../components/Invite/Invite';
import Home from '../components/Home/Home';
import Menu from '../components/SignIn/pages/Menu';
import {EnterInvitation} from '../components/EnterInvitation/EnterInvitation';

 
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/signin" element={<SignIn />}/>
        <Route exact path="/menu" element={<Menu />}/>
        <Route exact path="/generate-invitation" element={<Invite />}/>
        <Route exact path="/enter-invitation" element={<EnterInvitation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;