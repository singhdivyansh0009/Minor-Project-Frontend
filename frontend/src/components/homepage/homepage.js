import React from 'react';
import Navbar from '../navbar/navbar';
import About from '../about/about';
import styles from './Homepage.module.css';
import LawyerCard from '../lawyerCard/lawyerCard';
import Footer from '../footer/footer';
import HowItWork from '../howWork/howWork';
import { useEffect,useState } from 'react';
const lawyers = [
  {
    id: 1,
    name: 'Sumita Sen',
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada fames ac turpis egestas.',
    image: 'ad1.jpg', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Ravish Singh',
    rating: 4.8,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'ad4.jpg', // Placeholder image URL
  },
  {
    id: 3,
    name: 'Satish Kumar',
    rating: 4.2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'ad5.jpg', // Placeholder image URL
  },
  {
    id: 4,
    name: 'Subham Singh',
    rating: 4.2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'ad3.jpg', 
  },
  {
  id: 5,
    name: 'Sumita Sen',
    rating: 3.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada fames ac turpis egestas.',
    image: 'ad1.jpg', // Placeholder image URL
  },
  {
    id: 6,
    name: 'Ravish Singh',
    rating: 2.8,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'ad4.jpg', // Placeholder image URL
  },
  {
    id: 7,
    name: 'Sumit Sahu',
    rating: 3.2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'ad5.jpg', // Placeholder image URL
  },
  {
    id: 8,
    name: 'Subham Sahu',
    rating: 1.2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'ad3.jpg', 
  }
];
const Homepage = (props) => {
  const user = props.user;
  const [filteredLawyer, setFilteredLawyer] = useState([]);

  useEffect(() => {
    lawyers.sort((a, b) => b.rating - a.rating);
    const topLawyers = lawyers.slice(0, 4);
    setFilteredLawyer(topLawyers);
  }, []);
  return (
    <div className={styles.homepage}>
      <section><Navbar loginedUser={user} Logout = {props.onLogout} /></section>
      <section id ='about' className={styles.about}><About /></section>
      <section><LawyerCard lawyers = {filteredLawyer} loginedUser={user}/></section>
      <section id='howitwork'><HowItWork /></section>
      <section><Footer /></section>
    </div>
  );
}

export default Homepage;
