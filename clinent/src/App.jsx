import { useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser'
import Header from './components/Header';
import Banner from './components/Banner';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Banner/>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
