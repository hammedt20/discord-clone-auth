import {React, useContext, useState} from 'react'
import './login.css'
// import { useAuth } from '../context/AuthContext'
import AuthContext from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const {signUp} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    confirmPassword: ''
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

    if(formData.password !== formData.confirmPassword){
      return setError('Passwords do not match')
    }

    try{
      setError('')
      setLoading(true)
      await signUp(formData.email, formData.password)
      Navigate('/')
    }
    catch{
      setError('Failed to create an account')
    }

    setLoading(false)
  }

 
  return (
    <div className='signup'>
      <div className='signup-container'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
          <label htmlFor='email'>
            Email
          </label>
          <input type='email' id='email' name='email' value={formData.email} onChange = {handleform} />
          <label htmlFor='username'>
            Username
          </label>
          <input id='username' type='text' name='name' value={formData.name} onChange = {handleform} />
          <label htmlFor='password'>
            Password
          </label>
          <input type='password' id='password' name='password' value={formData.password}  onChange = {handleform}/>
          <label htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <input type='password' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword}  onChange = {handleform}/>
          <button disabled={loading} type='submit'>Sign Up</button>
        </form>
        <div className={error ? 'show' : 'hide'}>{error}</div>
        <div className='signup-text'>
          Already have an account? <Link className='link' to= '/login'>log in</Link>
          </div>
      </div>
    </div>
  )
}

export default Signup