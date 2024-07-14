import React from 'react';
import Inputfield from '../Inputfield';
import Buttons from '../Button';
import './Signup.css';

export default function Signup() {
  return (
    <div className="Signup-body">
      <div className="Signup-card">
        <div className="box">
          <div>
            <h3 className="username">Username</h3>
            <Inputfield className="inputfield" name="username" type="text" label="Enter username" />
          </div>
          <div>
            <h3 className="heading">Email</h3>
            <Inputfield className="inputfield" name="email" type="mail" label="Enter email-id" />
          </div>
          <div>
            <h3 className="heading">Password</h3>
            <Inputfield className="inputfield" name="password" type="password" label="Enter password" />
          </div>
          <div>
            <h3 className="heading">Confirm Password</h3>
            <Inputfield className="inputfield" name="confirm-password" type="password" label="Enter password" />
          </div>
          <Buttons name="Signup" />
          <p>Already have an account? <span link="#">Login</span></p>
        </div>
      </div>
    </div>
  );
}