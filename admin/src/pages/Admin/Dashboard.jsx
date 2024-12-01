import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5 space-y-6'>
      {/* Stats Cards */}
      <div className='flex flex-wrap gap-5 justify-between'>
        <div className='flex items-center gap-4 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 p-6 rounded-xl text-white min-w-[180px] cursor-pointer hover:scale-105 transition-transform'>
          <img className='w-12' src={assets.doctor_icon} alt="Doctors" />
          <div>
            <p className='text-2xl font-bold'>{dashData.doctors}</p>
            <p className='text-sm'>Doctors</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-indigo-400 p-6 rounded-xl text-white min-w-[180px] cursor-pointer hover:scale-105 transition-transform'>
          <img className='w-12' src={assets.appointments_icon} alt="Appointments" />
          <div>
            <p className='text-2xl font-bold'>{dashData.appointments}</p>
            <p className='text-sm'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-400 p-6 rounded-xl text-white min-w-[180px] cursor-pointer hover:scale-105 transition-transform'>
          <img className='w-12' src={assets.patients_icon} alt="Patients" />
          <div>
            <p className='text-2xl font-bold'>{dashData.patients}</p>
            <p className='text-sm'>Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Bookings Section */}
      <div className='bg-white rounded-xl shadow-md'>
        <div className='flex items-center gap-3 px-6 py-4 border-b'>
          <img src={assets.list_icon} alt="List Icon" />
          <p className='font-semibold text-lg'>Latest Bookings</p>
        </div>

        <div className='border-t'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div key={index} className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-all'>
              <img className='rounded-full w-12' src={item.docData.image} alt="Doctor" />
              <div className='flex-1 text-sm'>
                <p className='text-gray-800 font-semibold'>{item.docData.name}</p>
                <p className='text-gray-600'>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              {item.cancelled ? (
                <p className='text-red-500 text-xs font-medium'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-500 text-xs font-medium'>Completed</p>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className='w-8 cursor-pointer'
                  src={assets.cancel_icon}
                  alt="Cancel"
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
