import React from 'react'
import { useState } from 'react'
import styles from './Register.module.css';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const Register = () =>{
      const navigate =  useNavigate();
      const [user,setuser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        accountType:''
      })
  const [formError,setformError] = useState({});
  const [role, setRole] = useState('client');

  const handleRoleChange = (curRole) => {
    setRole(curRole);
  };

  // handling input 
  const handlechange = (e) => {
      setuser({
        ...user,
        [e.target.name]: e.target.value,
      });
      console.log(user);
  };

  // input validation 
  const isValidate = () => {
    let errors = {
      firstnameError: '',
      lastnameError: '',
      emailError: '',
      passError: '',
      passlenError: '',
      cpassError: '',
    };
    
    if (!user.firstName) errors.firstnameError = 'First Name is required';
    if (!user.lastName) errors.lastnameError = 'Last Name is required';
    if (!user.email) errors.emailError = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
          errors.emailError = 'Invalid email format';
      }
    }
    if (!user.password) errors.passError = 'Password is required';
    else if (user.password.length < 8)
      errors.passlenError = 'Password must contain 8 characters';
    if (user.password !== user.confirmPassword)
      errors.cpassError = 'Password not matching';
    
    setformError(errors);
    
        // Check if there are no errors
    return Object.values(errors).every((error) => error === '');
  };
      
      // called on clicking signup button
      const submit = () => {
        if (isValidate(user)) {
            user.accountType = role;
            console.log('Sending data to server:', user);
            axios.post('http://localhost:8000/api/v1/signup', user)
            .then((res) => alert(res.data.message))
            .then(() => navigate('/kyc'))
            .catch((error) => console.error('Error registering:', error));
        }
      };
      
    return (
      <div className={styles.Register}>
      <img src="files/logo.png" alt="" />
      <div className={styles.slider}>
        <span
          className={`${styles['slider-option']} ${role === 'client' ? styles.active : ''}`}
          id='client'
          onClick={() => handleRoleChange('client')}
        >
          Client
        </span>
        <span
          className={`${styles['slider-option']} ${role === 'serviceprovider' ? styles.active : ''}`}
          id='serviceprovider'
          onClick={() => handleRoleChange('serviceprovider')}
        >
          Service Provider
        </span>
      </div>
      <input 
        className={styles.Input}
        type="text" 
        name="firstName" 
        value={user.firstName} 
        onChange={handlechange} 
        placeholder='First Name' 
        required 
      />
      <span className={styles.error}>{formError.firstnameError}</span>
      <input 
        className={styles.Input}
        type="text" 
        name="lastName" 
        value={user.lastName} 
        onChange={handlechange} 
        placeholder='Last Name' 
        required 
      />
      <span className={styles.error}>{formError.lastnameError}</span>
      <input 
        className={styles.Input}
        type="email" 
        name="email" 
        value={user.email} 
        onChange={handlechange} 
        placeholder='Email id' 
        required 
      />
      <span className={styles.error}>{formError.emailError}</span>
      <input 
        className={styles.Input}
        type="password" 
        name="password" 
        value={user.password} 
        onChange={handlechange} 
        placeholder='Password' 
        required 
      />
      <span className={styles.error}>{formError.passError || formError.passlenError}</span>
      <input 
        className={styles.Input}
        type="password" 
        name="confirmPassword" 
        value={user.confirmPassword} 
        onChange={handlechange} 
        placeholder='Confirm Password' 
        required 
      />
      <span className={styles.error}>{formError.cpassError}</span>
      <div className={styles.button} onClick={submit}>Register</div>
      <div className={styles.reg}>
        Already have account? <span onClick={() => navigate('/login')}>Login</span>
      </div>
    </div>
    )
}
export default Register;