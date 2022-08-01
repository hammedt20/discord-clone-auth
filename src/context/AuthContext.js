import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, {  useState, useEffect, createContext } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext('default value')

export default AuthContext 

// export const useAuth = () =>{
//   return useContext(AuthContext)
// }

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
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

  const refresh = () => {
    return setFormData({
      name: '',
      password: '',
      email: '',
      confirmPassword: ''
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  

  function signUp (email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function logIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth)
  }

  function resetpassword(email){
    return sendPasswordResetEmail(auth, email)
  }

 

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetpassword,
    handleform,
    formData,
    refresh
  }

  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

