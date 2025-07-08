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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/job/:id' element={<Private><ApplyDetails/></Private>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
