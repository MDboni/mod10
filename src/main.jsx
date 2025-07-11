import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Register from './Component/Register.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import SignIn from './Component/SignIn.jsx'
import ApplyDetails from './Component/ApplyDetails.jsx'
import Private from './Private/Private.jsx'
import JobApply from './Component/JobApply.jsx'
import DashBoard from './Component/DashBoard.jsx'
import Addjob from './Component/Addjob.jsx'
import MyPostedJobs from './Component/MyPostedJobs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/addjob' element={<Addjob/>}/>
          <Route path='/job/:id' element={<Private><ApplyDetails/></Private>}/>
          <Route path='/jobApply/:id' element={<Private><JobApply/></Private>}/>
          <Route path='/deshboard' element={<Private><DashBoard/></Private>}/>
          <Route path='/mypostedjobs' element={<Private><MyPostedJobs/></Private>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
