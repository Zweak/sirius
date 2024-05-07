import React from 'react';
import  { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import {logo} from './assets';;
import { Home, CreatePost } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4] ">
        <Link className='flex' to="/" >
          <img src={logo} alt="logo" className="w-10 object-contain" />
          <span className='my-auto ml-3 font-sans font-semibold text-xl ' >Sirius</span>
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className="sm:px-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] ">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes>
      </main>
    </BrowserRouter>

  )
}