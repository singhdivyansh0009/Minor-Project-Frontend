import React from 'react';
import { useState } from 'react';
import styles from "./Login.module.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [errorForm,setErrorForm] = useState({});
  const [response,setresponse] = useState('');
  
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Perform auto login
      axios.get(`http://localhost:8000/api/v1/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res);
        if (res.data.success) {
          props.onLoginSuccess(res.data.user);
          navigate('/');
        } else {
          Cookies.remove('token'); // Remove token if verification fails
        }
      })
      .catch((error) => console.error('Error verifying token:', error));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  };

  const isValidate = (user) =>{
      let error = 
      {   
        emailError:'',
        passwordError:''
      };
       if(!user.email){
           error.emailError = "Email is required";
       }
       if(!user.password){
        error.passwordError = "Password is required";
       }
       setErrorForm(error);
       return Object.values(error).every((error) => error === '');
  } 

const submit = () => {
  if (isValidate(user)) {
    axios.post(`http://localhost:8000/api/v1/login`, user)
      .then(res => {
        setresponse(res.data.message);
        if (res.data.user) {
          props.onLoginSuccess(res.data.user);
          navigate('/');
          Cookies.set('token', res.data.token, { expires: 1 }); // Store token in a cookie for 1 day (24 hours)
        }
      })
      .catch((error) => console.error('Error registering:', error));
  }
};


  return (
    <div className={styles.login}>
    <img  className={styles.img} src="files/logo.png" alt="" />
    <input 
     className={styles.Input}
      type="email" 
      name='email' 
      value={user.email} 
      onChange={handleChange} 
      placeholder='Email' 
    />
    <span className={styles.error}>{errorForm.emailError}</span>
    <input 
      className={styles.Input}
      type="password" 
      name='password' 
      value={user.password} 
      onChange={handleChange} 
      placeholder='Password' 
    />
    <span className={styles.error}>{errorForm.passwordError}</span>
    <span className={styles.error}>{response}</span>
    <span className={styles.forgotpassword}>forgot your password?</span>
    <div className={styles.button} onClick={submit}>Login</div>
    <div className={styles.reg}>
      Don't have account? <span onClick={() => navigate('/register')}>Register</span>
    </div>
  </div>
  );
};

export default Login;
