import React from 'react';
import styles from './UnderReview.module.css';
import { useNavigate } from 'react-router-dom';
const UnderReview = () => {
  const navigate = useNavigate();
  return(
    <div className={styles.container}>
        <div className={styles.underReview}>
            <div className={styles.docImage}>
                <img src="files/document.png" alt="docimage" />
            </div>
            <div className={styles.message}>
                <h2>Under Verification</h2>
                <span>Your document is under verfication it will take upto 48 hours.</span>
            </div>
            <button className={styles.btn} onClick={()=> navigate('/')}>Done</button>
        </div>
    </div>
  )
}
export default UnderReview;