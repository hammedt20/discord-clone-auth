import {React, useContext, useState} from 'react'
import './login.css'
// import { useAuth } from '../context/AuthContext'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const {resetpassword,} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: ''
  })

  const handleform = (e) =>{
    const {name, value} = e.target
    setFormData(prevState => {
      return({
        ...prevState,
        [name]: value
      })
    })
  }

  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError('')
      setMessage('')
      setLoading(true)
      await resetpassword(formData.email)
      setMessage('Check your email for further instructions')
    }
    catch{
      setError('Failed to reset password')
    }

    setLoading(false)
  }

 
  return (
    <div className='signup'>
      <div className='signup-container'>
        <h2>Password Reset</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
          <label htmlFor='email'>
            Email
          </label>
          <input type='email' id='email' name='email' value={formData.email} onChange = {handleform} />
          <button disabled={loading} type='submit'>Reset Password</button>
        </form>
        {error && <div className={'show'}>{error}</div>}
        {message && <div className={'show'}>{message}</div>}
        <div className='signup-text'>
          <Link className='link' to= '/login'>Log in</Link>
        </div>
        <div className='signup-text'>
          Need an account? <Link className='link' to= '/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )

}

export default ForgotPassword