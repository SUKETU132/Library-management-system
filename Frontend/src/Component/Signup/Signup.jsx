import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Input from '../Inputfield'; // Assuming Inputfield is a custom component
import authService from '../../Mongo/auth'; // Assuming authService handles API calls
import { login as LoginUser } from '../../../store/authSlice'; // Assuming login action is defined
import { useDispatch } from 'react-redux';
import './Signup.css';

export default function SignUpThree() {
  const [msg, setMsg] = useState(''); // State for success message
  const [error, setError] = useState(''); // State for error message
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [otpVerification, setOtpVerification] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("this is the data: ", formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');
    setIsLoading(true);

    try {
      const userData = await authService.createAccount(formData);
      if (userData) {
        setMsg('Account created successfully.');
        dispatch(LoginUser(formData));
        setOtpVerification(true);
      }
    } catch (error) {
      setError(error.message); // Handle error messages
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  return (
    <section className="signup-container">
      <div className="signup-content">
        <h2 className="signup-heading">Sign up to create an account</h2>
        <p className="signup-text">
          Already have an account?{' '}
          <a href="/login" className="form-link">
            Sign In
          </a>
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Full Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="form-button">
            Create Account <ArrowRight size={16} className="ml-2" />
          </button>
        </form>

        {msg && <p>{msg}</p>} {/* Display success message if present */}
        {error && <p>{error}</p>} {/* Display error message if present */}
      </div>

      {otpVerification && (
        <div className="otp-verification">
          {/* Render your OTP verification component here */}
        </div>
      )}
    </section>
  );
}
