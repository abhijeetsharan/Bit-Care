import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3B82F6] to-[#6EE7B7] flex items-center justify-center">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-[#1F2937]">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-center text-[#6B7280]">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {state === 'Sign Up' && (
          <div className="w-full">
            <label className="text-sm text-[#4B5563]" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-[#D1D5DB] rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="text-sm text-[#4B5563]" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-[#D1D5DB] rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-[#4B5563]" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-[#D1D5DB] rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            required
          />
        </div>

        <button className="w-full py-3 bg-[#3B82F6] text-white rounded-md text-lg hover:bg-[#2563EB] transition-colors duration-200">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-center text-sm text-[#6B7280] mt-4">
          {state === 'Sign Up' ? (
            <>Already have an account? <span onClick={() => setState('Login')} className="text-[#3B82F6] underline cursor-pointer">Login here</span></>
          ) : (
            <>Need an account? <span onClick={() => setState('Sign Up')} className="text-[#3B82F6] underline cursor-pointer">Sign Up</span></>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login
