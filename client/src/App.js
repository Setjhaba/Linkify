import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom' 



function App() {
  return (
   
  
   
        <Routes>
          <Route path ="/" element={<Login />}></Route>
          <Route path ="signup" element={<Signup />}></Route>
        </Routes>

   
  
  )
}

export default App
