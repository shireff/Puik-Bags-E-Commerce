import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import style from "./Register.module.css"

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    lastname: '',
    email: '',
    password: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Registration successful!');
    window.location.href = "./../Login"
  };

  return (
    <>
      <div className={`reg d-flex justify-content-center align-items-center ${style.reg}`}>
        <div className={`allForm ${style.form}`}>
          <h2 className='text-center'>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className=' mb-3'>
              <label className='text-bold mb-2' htmlFor="username">First Name <span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                placeholder='Enter Your First Name'
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className=' mb-3'>
              <label className='text-bold mb-2' htmlFor="lastname">Last Name <span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="text"
                id="lastname"
                name="lastname"
                placeholder='Enter Your Last Name'
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className=' mb-3'>
              <label className='text-bold mb-2' htmlFor="email">Email Address<span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className=' mb-3'>
            <label className='text-bold mb-2' htmlFor="password">Password  <span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
              <button className={`btn w-100 ${style.btn}`} type="submit">Create New Account</button>
          </form>
        </div>
      </div>
    </>
  );
}


