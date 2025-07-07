import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Register from './Component/Register.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import SignIn from './Component/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
