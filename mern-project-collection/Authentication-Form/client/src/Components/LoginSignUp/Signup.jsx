import './Signup.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import dob_icon from '../../assets/dob.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the '/login' route when clicked
  };

  const [formData, setFormData] = useState({
      name: '',
      dateOfBirth: '',
      email: '',
      password: '',
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post('http://localhost:3000/user/register', formData);
          console.log(response.data.msg);

          // Redirect the user after successful sign-up
          if (response.status === 200) {
              navigate('/login'); // Redirect to login page
          }
      } catch (error) {
          console.error('Error signing up:', error);
      }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Sign up
        </div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <div className='input'>
            <img src={user_icon} alt="" />
            <input 
              type="text" 
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className='input'>
            <img src={dob_icon} alt="" />
            <input 
              type="date" 
              placeholder='Date of Birth'
              value={formData.dateOfBirth}
              onChange={handleChange}
              name="dateOfBirth"
            />
          </div>  

          <div className='input'>
            <img src={email_icon} alt="" />
            <input 
              type="email" 
              placeholder='Email Id'
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
        </div>
        <div>
          <div className="forgot-password">
            <span>Forgot Password?</span>
          </div>
          <div className="submit-container">
            <button className='submit' type="submit">
              Sign up
            </button>
          </div>
          <div className="login-button">
            Already have an Account? <span onClick={handleLoginClick}>Login</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
