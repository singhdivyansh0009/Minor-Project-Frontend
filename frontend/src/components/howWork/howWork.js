import React from "react";
import styles from "./howWork.module.css";
import { Fade } from "react-awesome-reveal";

const Carosel = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>How it works ?</h1>
      <div className={styles.carouselContainer}>
      <Fade direction="left">
          <div className={styles.card}>
            <div className={styles.rightcontent}>
              <h1 className={styles.h1}>01</h1>
              <h3 className={styles.h3}>Find the lawyer</h3>
              <span className={styles.span}>You can search for the appropriate lawyer for your legal works.</span>
            </div>
            <div className={styles.right}>
              <img src="files/step2.jpg" alt="" />
            </div>
          </div>
      </Fade>
        <Fade direction="up">
          <div className={styles.card}>
            <div className={styles.leftcontent}>
              <h1 className={styles.h1}>02</h1>
              <h3 className={styles.h3}>Discuss With Lawyer</h3>
              <span className={styles.span}>You can discuss about the case with the lawyer on chat or call or video conferences.</span>
            </div>
            <div className={styles.left}>
              <img src="files/step1.jpg" alt="" />
            </div>
          </div>
        </Fade>
        <Fade direction="left">
          <div className={styles.card}>
            <div className={styles.rightcontent}>
              <h1 className={styles.h1}>03</h1>
              <h3 className={styles.h3}>Hire the Lawyer</h3>
              <span className={styles.span}>You can now hire the lawyer if all discussion is done by making payment.</span>
            </div>
            <div className={styles.right}>
              <img src="files/step3.png" alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Carosel;
