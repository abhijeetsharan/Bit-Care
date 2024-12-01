import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen flex flex-col items-center p-6">
      
      {/* Title Section */}
      <div className="text-center py-10">
        <p className="text-4xl font-extrabold text-gray-800">
          CONTACT <span className="text-primary">US</span>
        </p>
        <p className="mt-2 text-gray-500">We'd love to hear from you!</p>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center max-w-5xl w-full">
        
        {/* Left Section: Office Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex-1">
          <div className="space-y-6">
            
            {/* Office Information */}
            <div>
              <p className="font-bold text-xl text-gray-700">OUR OFFICE</p>
              <p className="text-gray-500 mt-2">
                BIT Dispensary, BIT Mesra <br />
                Ranchi, Jharkhand
              </p>
            </div>
            
            {/* Contact Information */}
            <div>
              <p className="font-bold text-xl text-gray-700">GET IN TOUCH</p>
              <p className="text-gray-500 mt-2">
                Phone: <a href="tel:1234567890" className="text-primary">+91-123-456-7890</a> <br />
                Email: <a href="mailto:care@bitmesra.com" className="text-primary"> care@bitmesra.com</a>
              </p>
            </div>

            {/* {Ambulance Information} */}
            <div>
              <p className="font-bold text-xl text-gray-700">AMBULANCE</p>
              <p className="text-gray-500 mt-2">
                Phone: <a href="tel:1234567890" className="text-primary">+91 651-227-6009</a> <br />
                Phone: <a href="tel:1234567890" className="text-primary">+91-123-456-7890</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Section: Image */}
        <div className="flex-1 max-w-md">
          <img
            className="w-full rounded-lg shadow-lg"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
