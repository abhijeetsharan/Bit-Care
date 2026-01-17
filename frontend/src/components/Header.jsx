import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-10 my-6">

      {/* --------- Hero Section --------- */}
      <div className="bg-primary rounded-3xl flex flex-col md:flex-row items-center px-6 py-10 md:px-16 md:py-16 shadow-lg overflow-hidden relative">
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 z-10 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comprehensive Healthcare <br className="hidden lg:block" /> at BIT Dispensary
          </h1>
          <p className="text-white text-opacity-90 text-sm md:text-base leading-relaxed max-w-xl font-light">
            A dedicated 20-bed healthcare facility serving students, faculty, staff, and the local community. 
            We operate 24/7 with extensive medical services to ensure your well-being.
          </p>
          <a
            href="#speciality"
            className="bg-white text-primary text-sm md:text-base font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label="Book an appointment at BIT Dispensary"
          >
            Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center md:justify-end">
          <img
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
            src={assets.header_img}
            alt="Doctors and Medical Staff at BIT Dispensary"
          />
        </div>
      </div>

      {/* --------- Info Grid Section --------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1: Medical Team */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Medical Team</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our team consists of <strong>5 allopathic</strong> and <strong>1 homeopathic</strong> doctor, supported by approximately <strong>20 paramedical staff</strong>.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            We offer specialized weekly consultations in:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm font-medium grid grid-cols-2 gap-1">
            <li>Dentistry</li>
            <li>Physiotherapy</li>
            <li>Ophthalmology</li>
            <li>Dermatology</li>
            <li>Gynecology</li>
          </ul>
        </div>

        {/* Card 2: Key Services */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Our Services</h2>
          <ul className="text-gray-600 text-sm space-y-2.5">
            <li className="flex items-start gap-2">
              <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-primary"></span>
              Outpatient & Specialist Consultations
            </li>
            <li className="flex items-start gap-2">
              <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-primary"></span>
              Inpatient Care for Minor Conditions
            </li>
            <li className="flex items-start gap-2">
              <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-primary"></span>
              24/7 Emergency Services
            </li>
            <li className="flex items-start gap-2">
              <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-primary"></span>
              Homeopathy & Dental Clinics
            </li>
            <li className="flex items-start gap-2">
              <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-primary"></span>
              Pathology Lab & Diagnostics (X-Ray, ECG)
            </li>
          </ul>
        </div>

        {/* Card 3: Facilities */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Facilities</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Ambulance Service:</strong> Four ambulances available across all shifts, equipped with oxygen cylinders and first-aid.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-2">
             <h3 className="text-primary font-semibold text-sm mb-2">Additional Units</h3>
             <ul className="text-gray-600 text-xs space-y-1">
                <li>• Two Isolation Wards (Male/Female)</li>
                <li>• Medical Dressing Facilities</li>
                <li>• Physiotherapy Unit</li>
             </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
