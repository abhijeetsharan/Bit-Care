import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5 space-y-6'>
      {/* Header */}
      <p className='mb-3 text-2xl font-semibold text-gray-800'>All Appointments</p>

      {/* Appointments List */}
      <div className='bg-white border rounded-lg shadow-sm text-sm max-h-[80vh] overflow-y-scroll'>
        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-4 px-6 bg-gray-100 text-gray-600 font-medium'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Appointments */}
        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50 transition-all' key={index}>
            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 rounded-full' alt="Patient" />
              <p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img src={item.docData.image} className='w-8 rounded-full bg-gray-200' alt="Doctor" />
              <p>{item.docData.name}</p>
            </div>
            <p>{currency}{item.amount}</p>

            {/* Action Button (Cancel or Status) */}
            {item.cancelled ? (
              <p className='text-red-500 text-xs font-medium'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-green-500 text-xs font-medium'>Completed</p>
            ) : (
              <div
                onClick={() => cancelAppointment(item._id)}
                className='w-8 h-8 bg-red-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-200 transition-all'
              >
                <img className='w-4' src={assets.cancel_icon} alt="Cancel" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
