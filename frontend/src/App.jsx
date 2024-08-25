// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      {/* Contêiner Principal */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        
        {/* Navbar */}
        <nav className="flex space-x-4 mb-8">
          <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Register
          </Link>
          <Link to="/login" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Login
          </Link>
          {token && (
            <Link to="/profile" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
              Profile
            </Link>
          )}
        </nav>

        {/* Routes */}
        <div className="w-full max-w-md">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            {token && <Route path="/profile" element={<UserProfile token={token} />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
