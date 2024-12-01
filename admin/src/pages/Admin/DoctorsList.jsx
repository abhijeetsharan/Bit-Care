import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-2xl font-semibold text-gray-800 mb-5'>All Doctors</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {doctors.map((item, index) => (
          <div className='bg-white border border-[#C9D8FF] rounded-xl overflow-hidden shadow-sm transform transition-all duration-500 hover:scale-105 hover:shadow-lg' key={index}>
            {/* Image with gradient background */}
            <div className='relative'>
              <img className='w-full h-48 object-cover group-hover:opacity-80 transition-all duration-300' src={item.image} alt={item.name} />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary to-transparent opacity-50 group-hover:opacity-100 transition-all duration-300'></div>
            </div>
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-semibold'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              <div className='mt-3 flex items-center gap-2 text-sm'>
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  className="rounded-md border-gray-300 text-primary focus:ring-0"
                />
                <p className={item.available ? 'text-green-500' : 'text-red-500'}>
                  {item.available ? 'Available' : 'Unavailable'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
