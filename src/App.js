import React from 'react'
import Signup from './login-page/Signup'
import Page from './Page'
import ForgotPassword from './login-page/ForgotPassword'
import Login from './login-page/Login'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privateroute from './Privateroute'


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path = '/' element = {<Privateroute><Page /></Privateroute> } />
          <Route exact path='/signup' element = {<Signup />} />
          <Route exact path='/login' element = {<Login />} />
          <Route exact path='/forgotpassword' element = {<ForgotPassword />} />
        </Routes>
    </AuthProvider>
    </Router>
  )
}

export default App