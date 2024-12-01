import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

  // Function to update user profile data using API
  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      image && formData.append('image', image);

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData ? (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-6 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-gray-800">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          {isEdit ? (
            <label htmlFor="image" className="relative cursor-pointer">
              <img
                className="w-36 h-36 rounded-full shadow-lg opacity-80"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
              />
              <img className="absolute bottom-2 right-2 w-8" src={assets.upload_icon} alt="Upload Icon" />
              <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
            </label>
          ) : (
            <img className="w-36 h-36 rounded-full shadow-lg" src={userData.image} alt="" />
          )}
          {isEdit ? (
            <input
              type="text"
              className="mt-4 text-2xl font-semibold text-center bg-gray-50 border border-gray-300 rounded-lg p-2"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <p className="mt-4 text-2xl font-semibold">{userData.name}</p>
          )}
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Contact Information */}
        <div className="mb-6">
          <p className="text-lg font-bold text-gray-700 mb-4">Contact Information</p>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium">Email:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 rounded-lg p-2"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            ) : (
              <p>{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 rounded-lg p-2 mb-2"
                  value={userData.address.line1}
                  onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                />
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 rounded-lg p-2"
                  value={userData.address.line2}
                  onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                />
              </div>
            ) : (
              <p>{userData.address.line1} <br /> {userData.address.line2}</p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="mb-6">
          <p className="text-lg font-bold text-gray-700 mb-4">Basic Information</p>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-50 border border-gray-300 rounded-lg p-2"
                value={userData.gender}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 rounded-lg p-2"
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit / Save Button */}
        <div className="text-center">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default MyProfile;
