import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='m-5'>

      {/* Dashboard Metrics */}
      <div className='flex flex-wrap gap-5'>
        <div className='flex items-center gap-3 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg p-5 min-w-[13rem] rounded-xl transition-all hover:scale-105 hover:shadow-xl'>
          <img className='w-12' src={assets.earning_icon} alt="Earnings Icon" />
          <div>
            <p className='text-2xl font-bold text-gray-700'>{currency} {dashData.earnings}</p>
            <p className='text-gray-500'>Earnings</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-gradient-to-br from-green-100 to-green-200 shadow-lg p-5 min-w-[13rem] rounded-xl transition-all hover:scale-105 hover:shadow-xl'>
          <img className='w-12' src={assets.appointments_icon} alt="Appointments Icon" />
          <div>
            <p className='text-2xl font-bold text-gray-700'>{dashData.appointments}</p>
            <p className='text-gray-500'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg p-5 min-w-[13rem] rounded-xl transition-all hover:scale-105 hover:shadow-xl'>
          <img className='w-12' src={assets.patients_icon} alt="Patients Icon" />
          <div>
            <p className='text-2xl font-bold text-gray-700'>{dashData.patients}</p>
            <p className='text-gray-500'>Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Bookings */}
      <div className='bg-white shadow-md rounded-xl mt-10'>
        <div className='flex items-center gap-3 px-6 py-4 border-b rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200'>
          <img className='w-5' src={assets.list_icon} alt="List Icon" />
          <p className='text-lg font-semibold text-gray-700'>Latest Bookings</p>
        </div>
        <div className='divide-y'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-100' key={index}>
              <img className='rounded-full w-10 h-10' src={item.userData.image} alt={item.userData.name} />
              <div className='flex-1'>
                <p className='text-gray-800 font-semibold'>{item.userData.name}</p>
                <p className='text-gray-600 text-sm'>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              {item.cancelled ? (
                <p className='text-red-500 text-xs font-bold'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-500 text-xs font-bold'>Completed</p>
              ) : (
                <div className='flex gap-2'>
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className='w-8 h-8 cursor-pointer'
                    src={assets.cancel_icon}
                    alt="Cancel Icon"
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    className='w-8 h-8 cursor-pointer'
                    src={assets.tick_icon}
                    alt="Complete Icon"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
