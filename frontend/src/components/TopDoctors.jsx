import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 px-6 md:px-16 text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl text-white">Our Doctors</h1>
        <p className="text-lg sm:w-2/3 mx-auto mt-4 text-white font-light leading-relaxed">
          Care Close to Campus: Your Health, Our Priority.
        </p>
      </div>

      {/* Doctors Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className="relative bg-white border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            {/* Horizontal Card Layout */}
            <div className="flex items-center gap-6 p-6">
              {/* Doctor Image */}
              <img className="w-28 h-28 object-cover rounded-full border-4 border-[#EAEFFF] transition-all duration-300 group-hover:opacity-90" src={item.image} alt={item.name} />
              
              {/* Doctor Info */}
              <div className="flex flex-col justify-between h-full">
                {/* Availability Indicator */}
                <div className={`flex items-center gap-2 text-xs font-medium ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`} />
                  <span>{item.available ? 'Available Now' : 'Not Available'}</span>
                </div>

                {/* Doctor's Name */}
                <p className="text-2xl font-semibold mt-4 text-[#262626]">{item.name}</p>
                
                {/* Doctor's Speciality */}
                <p className="text-sm text-gray-500 mt-2">{item.speciality}</p>

                {/* More Information Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          className="bg-white text-gray-800 text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
        >
          See More Doctors
        </button>
      </div>
    </div>
  )
}

export default TopDoctors
