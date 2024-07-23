import React from 'react';
import styles from './LawyerCard.module.css'; // Assuming you have a CSS module file for styling
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';


const LawyerCard = ({lawyers,user}) => {
  const navigate = useNavigate();
  const submit = () =>{
        if(!user)
          navigate('/login');
  }
  return (
  
  <div className={styles.container}>
    <h1 className={styles.heading}>Top Rated Lawyers</h1>
    <Fade direction='left' delay={100}>
    <div className={styles.carouselContainer}>
        {lawyers.map(lawyer => (
          <div key={lawyer.id} className={styles.card}>
            <img src={`./files/${lawyer.image}`} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <div className={styles.rating}>
                  {renderStars(lawyer.rating)}
              </div>
            <button className={styles.btn} onClick={submit}>Check out</button>
          </div>
        ))}
    </div>
    </Fade>
  </div>
  );
};
const renderStars = (rating) =>{
  const stars = [];
  for(let i = 0; i < rating; i++){
    stars.push(<span key = {i} className={styles.stars}>★</span>)
  }
  return stars;
}
export default LawyerCard;
