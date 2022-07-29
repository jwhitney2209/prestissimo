import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user})

        // after user signs up, navigate user to dashboard
        // TODO: build feature to send user to profile setup page after signing up
        navigate("/dashboard")
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, signup }
}