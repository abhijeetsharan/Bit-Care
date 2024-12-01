import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-10 lg:px-14 py-16 my-20 mx-4 md:mx-10 rounded-xl shadow-lg">

            {/* ------- Full Width Background Image ------- */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${assets.appointment_img})` }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            </div>

            {/* ------- Content Wrapper ------- */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-white">

                {/* ------- Left Side - Text and Call to Action ------- */}
                <div className="flex-1 text-center lg:text-left lg:w-1/2 max-w-lg space-y-6 lg:space-y-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-3xl font-extrabold leading-tight tracking-wide">
                        Connect with BIT's Medical Experts: Schedule Your Campus Healthcare Consultation
                    </h2>
                    <p className="text-lg sm:text-xl text-white opacity-90">
                        The trusted, accessible medical network within the college
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                            className="bg-yellow-500 text-gray-800 text-lg px-10 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300 transform"
                        >
                            Create Account Now
                        </button>
                    </div>
                </div>

                {/* ------- Right Side - Dynamic Image or Icon Section ------- */}
                <div className="flex-1 lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                        <div className="w-36 sm:w-48 lg:w-72 h-36 sm:h-48 lg:h-72 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                            <img className="w-2/3 sm:w-1/2 lg:w-3/5 transform hover:scale-110 transition-all duration-300" src={assets.group_profiles} alt="Doctor Profile" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner
