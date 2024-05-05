import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css' 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing local storage, removing tokens, etc.
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
