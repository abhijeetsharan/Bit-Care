import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-16 md:py-32 flex flex-col gap-8">

      {/* --------- Card 1: Main Heading and Description (Full Width) --------- */}
      <div className="bg-slate-200 rounded-xl shadow-lg p-8 md:p-12 w-full flex flex-col items-start space-y-6">
        <h1 className="text-3xl sm:text-xl lg:text-2xl font-extrabold text-primary leading-tight">
          The BIT Dispensary is a comprehensive 20-bed healthcare facility that serves multiple <br />
          constituencies, including students, faculty, staff, their families, and local villagers.
        </h1>
        <p className="text-sm sm:text-base font-light text-gray-600">
          Operating around the clock, seven days a week, the center provides extensive medical services across three daily shifts.
        </p>
        <a
          href="#speciality"
          className="bg-primary text-white text-sm px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
        >
          Book Appointment
        </a>
      </div>

      {/* --------- Card 2: Trusted Doctors Info (50/50 Layout) --------- */}
      <div className="flex  flex-row gap-8">

        {/* Left Card */}
        <div className="bg-slate-200 rounded-xl shadow-lg p-8 md:p-12 w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
          <div className="flex items-center space-x-4">
            {/* <img className="w-16 h-16 rounded-full" src={assets.group_profiles} alt="Doctors" /> */}
            <p className="text-lg font-semibold text-primary">The medical team consists of 5 allopathic and 1 homeopathic doctor, supported by approximately 20 paramedical staff.
              Additionally, the dispensary offers specialized consultations with visiting experts in dentistry, physiotherapy, ophthalmology, dermatology, and gynecology on a weekly basis.</p>
          </div>
          <p className="text-sm sm:text-base font-light text-gray-600">
            <b>The dispensary provides a wide range of medical services, including:</b> <br />
            1. Outpatient departments with part-time specialist consultations. <br />
            2. Inpatient care for minor medical conditions. <br />
            3. 24/7 emergency services. <br />
            4. Homeopathy and dental clinics <br />
            5. Pathological laboratory <br />
            6. Physiotherapy and diagnostic units (X-Ray and ECG) <br />
            7. Two isolation wards (separate for male and female patients)  <br />
            8. Medical dressing facilities
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-slate-200 rounded-xl shadow-lg p-8 md:p-12 w-full md:w-1/2 flex flex-col items-center space-y-6">
          <img
            className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            src={assets.header_img}
            alt="Doctor"
          />
          <p className="text-sm sm:text-base font-light text-gray-600">
            The facility is well-equipped with four ambulances, each available across all shifts and furnished with oxygen cylinders and first-aid equipment.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Header
