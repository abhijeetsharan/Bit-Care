import axios from 'axios';
import React, { useContext, useState } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { setDToken } = useContext(DoctorContext);
  const { setAToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });
        if (data.success) {
          setAToken(data.token);
          localStorage.setItem('aToken', data.token);
          toast.success('Admin logged in successfully!');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, { email, password });
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem('dToken', data.token);
          toast.success('Doctor logged in successfully!');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-green-400 to-purple-500">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-8 min-w-[340px] sm:min-w-[400px]"
      >
        <p className="text-2xl font-bold text-center text-gray-700">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            {state}
          </span>{' '}
          Login
        </p>

        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Login
        </button>

        {/* Toggle Between Admin and Doctor */}
        {state === 'Admin' ? (
          <p className="text-sm text-center text-gray-600">
            Doctor Login?{' '}
            <span
              onClick={() => setState('Doctor')}
              className="text-blue-500 underline cursor-pointer hover:text-blue-600"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-center text-gray-600">
            Admin Login?{' '}
            <span
              onClick={() => setState('Admin')}
              className="text-blue-500 underline cursor-pointer hover:text-blue-600"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
