import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 px-6 md:px-12 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold sm:text-4xl">Specialist Care at BIT: Connect with Our Expert Doctors</h1>
        <p className="text-lg sm:w-2/3 mx-auto mt-4 font-light leading-relaxed">
        Healthcare is just a few steps away, integrated within the campus environment.
        </p>
      </div>

      <div className="flex sm:justify-center gap-6 overflow-x-auto pb-8 mt-10">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-center group transform hover:scale-105 transition-all duration-300 ease-in-out"
            key={index}
          >
            {/* Image with a circular background */}
            <div className="relative mb-4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-white shadow-lg flex justify-center items-center">
              <img
                className="w-16 sm:w-20 rounded-full object-cover"
                src={item.image}
                alt={item.speciality}
              />
            </div>

            {/* Speciality Text */}
            <p className="font-semibold text-lg group-hover:text-primary transition-all duration-300">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
