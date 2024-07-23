import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ loginedUser , Logout}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLawyerTypeClick = (lawyerType) => {
    navigate(`/lawyer-list?type=${lawyerType}`);
  };

  const onLogout = () => {
    // Add logout functionality here
    Logout();
    console.log('User logged out');
    navigate('/');
  };

  const isLawyerListPage = location.pathname === '/lawyer-list';

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/files/logo.png" alt="LawFirm Logo" onClick={()=>navigate('/')}/>
      </div>
      <div className={`${styles.navlinks} ${menuOpen ? styles.open : ''}`}>
        <div className={`${styles.dropdown}`}>
          {isLawyerListPage ? (
            <a href="#" onClick={() => navigate('/')}>HOME</a>
          ) : (
            <>
              <a href="#" onClick={() => handleLawyerTypeClick('Family Lawyer')}>FIND YOUR LAWYER</a>
              <div className={styles['dropdown-content']}>
                <a href="#" onClick={() => handleLawyerTypeClick('Family Lawyer')}>Family Lawyer</a>
                <a href="#" onClick={() => handleLawyerTypeClick('Criminal Lawyer')}>Criminal Lawyer</a>
                <a href="#" onClick={() => handleLawyerTypeClick('Civil Lawyer')}>Civil Lawyer</a>
                <a href="#" onClick={() => handleLawyerTypeClick('Corporate Lawyer')}>Corporate Lawyer</a>
              </div>
            </>
          )}
        </div>
        <a href="#">LEGAL ADVICE</a>
        <a href="#about">ABOUT</a>
        <a href="#howitwork">HOW IT WORKS</a>
        <div className={styles['auth-buttons']}>
          {loginedUser ? (
            <>
              <span className={styles.profile} onClick={() => navigate('/profile')}>
                <img src="files/user.png" alt="files/user.png" className={styles.profileIcon} />
              </span>
              <span className={styles.signup} onClick={onLogout}>Log Out</span>
            </>
          ) : (
            <>
              <span className={styles.login} onClick={() => navigate('/login')}>Log In</span>
              <span className={styles.signup} onClick={() => navigate('/register')}>Sign Up</span>
            </>
          )}
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;
