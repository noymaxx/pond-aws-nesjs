// src/components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../services/authService';

const UserProfile = ({ token }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfile(token);
        setUser(response.data);
        setFormData({
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
      } catch (error) {
        console.error(error);
        alert('Error fetching user profile.');
      }
    };
    fetchUser();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile(user.id, formData, token);
      setUser(response.data);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating profile.');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button type="submit" className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700">
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="w-full p-2 mt-2 bg-red-600 text-white rounded hover:bg-red-700">
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="mb-2"><strong>First Name:</strong> {user.firstName}</p>
            <p className="mb-4"><strong>Last Name:</strong> {user.lastName}</p>
            <button onClick={() => setIsEditing(true)} className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
