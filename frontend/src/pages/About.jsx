import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white">
        <h1 className="text-3xl font-bold">About <span className="text-gray-200">Us</span></h1>
        <p className="mt-2 text-lg">
          Learn more about who we are and what drives us at <b>BIT CARE</b>.
        </p>
      </header>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <img
          className="w-full rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            The present <b>BIT Dispensary</b> is 20 bedded including 8 bedded two isolation wards fully functional Health Care Centre providing facilities to BIT Students, 
            Faculties, their families and staff members & their families plus Villagers around the Campus.
          </p>
          <p>
            The Dispensary is functioning in all the 3 shifts (Round the clock 24x7) including Sunday & Holidays attending all OPD and IPD & Emergency Cases.
            Presently it is manned by 5 Allopath & 1 Homeopath Doctor put in shift/General shift and about 20 paramedical staff. We have also Dentist, Physiotherapist, Eye, Skin, & Gynecologist as visiting specialist every week for health care service.
          </p>
          <div>
            <p>
            The workforce, as per the need and work load is quite insufficient and we are in the process of appointing and adding up few more Doctors & Paramedics to give our services in a better way.  
            The Health Centre is equipped with 4 Ambulances, available in all the 3 shifts fitted with Oxygen Cylinders & first aid kits.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 px-6 lg:px-20 text-white">
        <h2 className="text-center text-3xl font-bold mb-10">
          Facilities & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-gray-800 hover:bg-gray-500 hover:text-white">
            {/* <h3 className="text-xl font-bold mb-4">Efficiency</h3> */}
            <p className="text-center text-gray-600 md:text-gray-400">
              OPD services including part time specialist OPD viz.Skin, Eye,  Obs/ Gynecologist & Dental surgeon & Physiotherapist.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-gray-800 hover:bg-gray-500 hover:text-white">
            {/* <h3 className="text-xl font-bold mb-4">Convenience</h3> */}
            <p className="text-center text-gray-600 md:text-gray-400">
              In patient services for minor ailments & Emergency Services.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-gray-800 hover:bg-gray-500 hover:text-white">
            {/* <h3 className="text-xl font-bold mb-4">Personalization</h3> */}
            <p className="text-center text-gray-600 md:text-gray-400">
              Homeopathy Clinic, Dental Clinic, X-ray Unit, ECG Unit, Isolation Ward, Dressing Unit, Pathological Laboratory.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
