import React from 'react';
import styles from './About.module.css';
const About = () => {

  return (
       <div className={styles.about}>
         <div className={styles.content}>
            <h1>Empowering Legal Solutions at Your Fingertips</h1>
            <ul>
              <li>Expert Legal Professionals</li>
              <li>Seamless and Secure</li>
              <li>Transparent and Affordablele</li>
           </ul>
         </div>
         <div className={styles.contentLogo}>
            <img src="files/ad1-removebg.png" alt="" />
         </div>
    </div>
  );
}

export default About;
