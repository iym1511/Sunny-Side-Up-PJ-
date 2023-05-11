import React from 'react';
import logo from './logo.svg';
import './App.css';
import SunnySideUp from './page/SunnySideUp';
import { Route, Routes } from 'react-router';
import Home from './page/Home';
import NationwideBox from './components/NationwideBox';
import Notfound from './page/Notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route index path='/home' element={<Home/>}/>
        <Route path='/sunnysideup' element={<SunnySideUp/>}>
          <Route path='/sunnysideup/:day' element={<NationwideBox/>}/>
        </Route>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </div>
  );
}

export default App;
