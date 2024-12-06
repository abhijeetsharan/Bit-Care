import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 bg-white shadow-md relative">
      {/* Left Navigation Items (for Desktop) */}
      <div className="absolute left-0 flex items-center gap-5 ml-5 hidden md:flex">
        <NavLink to="/" className="nav-item">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors" className="nav-item">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <li className="py-1">CONTACT</li>
        </NavLink>
        <a href="https://bit-care-admin.onrender.com" className='border px-5 text-xs py-1.5 rounded-full font-bold text-gray-600 border-gray-600 hover:text-blue-800 transition'>Admin</a>
        <a
          href="https://bit-care-admin.onrender.com/"
          className="border px-5 text-xs py-1.5 rounded-full font-bold text-gray-600 border-gray-600 hover:text-blue-800 transition hidden md:inline-block"
        >
          Admin
        </a>
      </div>

      {/* Logo in the center */}
      <div className="mx-auto">
        <p className="font-bold text-2xl text-blue-800">BIT CARE</p>
      </div>

      {/* Right Section (User Profile or Login) */}
      <div className="absolute right-0 flex items-center gap-4 mr-5">
        {token && userData ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img className="w-8 rounded-full" src={userData.image} alt="User" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-gray-50 rounded shadow-lg flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <a
                  href="https://bit-care-admin.onrender.com/"
                  className="hover:text-black cursor-pointer"
                >
                  Admin
                </a>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-600 transition-colors"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${showMenu ? 'fixed w-full top-0 right-0 bottom-0 bg-white z-20' : 'h-0 w-0'} overflow-hidden transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img src={assets.logo} className="w-36" alt="Logo" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className="w-7 cursor-pointer"
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/" className="menu-item">
            <p className="px-4 py-2 rounded-full inline-block">HOME</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="menu-item">
            <p className="px-4 py-2 rounded-full inline-block">ALL DOCTORS</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about" className="menu-item">
            <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact" className="menu-item">
            <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
