import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleFilterChange = (event) => {
    const selectedSpeciality = event.target.value;
    if (selectedSpeciality) {
      navigate(`/doctors/${selectedSpeciality}`);
    } else {
      navigate('/doctors');
    }
  };

  return (
    <div>
      {/* Title Section */}
      <p className="text-gray-600 mb-5">Browse through the doctors specialist.</p>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? 'bg-primary text-white' : ''
          }`}
        >
          Filters
        </button>

        {/* Dropdown Filter */}
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}
        >
          <select
            onChange={handleFilterChange}
            value={speciality || ''}
            className="w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            <option value="">Select Speciality</option>
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>
      </div>

      {/* Doctor Cards (Horizontal) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 mt-6">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              {/* Horizontal Card Layout */}
              <div className="flex items-center gap-4 p-4">
                {/* Image Section */}
                <div className="w-1/3">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center w-2/3">
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      item.available ? 'text-green-500' : 'text-gray-500'
                    }`}
                  >
                    <p
                      className={`w-2 h-2 rounded-full ${
                        item.available ? 'bg-green-500' : 'bg-gray-500'
                      }`}
                    ></p>
                    <p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className="text-[#262626] text-lg font-medium">{item.name}</p>
                  <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No doctors found for this specialty.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
