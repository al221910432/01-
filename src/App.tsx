import React, { Fragment } from 'react';
import logo from './logo.svg';
import Header from './components/common/Header';
import Home from './components/common/Home';
import MainTypeScript from './components/typescript/MainTypeScript';
import MainHooks from './components/hooks/MainHooks';
import Default from './components/common/Default';


import {Navigate,Route,Routes} from 'react-router-dom';



function App() {
  return (
   <div>
    <Header/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='typescript' element={<MainTypeScript/>} />
      <Route path='hooks' element={<MainHooks/>} />
      <Route path='default' element={<Default/>} />
      <Route path='/*' element={ <Navigate to={'default'}/>} />
    </Routes>
    </div>
  );
}

export default App;
