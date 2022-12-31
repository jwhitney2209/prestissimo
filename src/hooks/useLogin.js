import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user})

        // after user logs in, navigate user to dashboard
        navigate('/students')
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, login }
}