import {React, useContext, useState} from 'react'
import './login.css'
// import { useAuth } from '../context/AuthContext'
import AuthContext from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const {logIn, formData, handleform} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()

 
  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError('')
      setLoading(true)
      await logIn(formData.email, formData.password)
      Navigate('/')
      // refresh()
    }
    catch{
      setError('Failed to Log in')
    }
    
    setLoading(false)
  }

 
  return (
    <div className='signup'>
      <div className='signup-container'>
        <h2>Log In your Account</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
          <label htmlFor='email'>
            Email
          </label>
          <input type='email' id='email' name='email' value={formData.email} onChange = {handleform} />
          <label htmlFor='password'>
            Password
          </label>
          <input type='password' id='password' name='password' value={formData.password}  onChange = {handleform}/>
          <button disabled={loading} type='submit'>Login</button>
        </form>
        <div className={error ? 'show' : 'hide'}>{error}</div>
        <div className='signup-text'>
          <Link className='link' to= '/forgotpassword'>Forgot password?</Link>
        </div>
        <div className='signup-text'>
          Need an account? <Link className='link' to= '/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login