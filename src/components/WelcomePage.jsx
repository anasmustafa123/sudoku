import styles from "../styles/welcome.module.css";
import { useState } from "react";

function WelcomePage(props) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div onClick={() => props.setShownPage(1)} className={styles.btn}>
          <i className="bx bx-show"></i>
        </div>
        <div onClick={() => props.setShownPage(2)} className={styles.btn}>
          <i className="bx bxl-dropbox"></i>
        </div>
        <div onClick={() => props.setShownPage(3)} className={styles.btn}>
          <i className="bx bx-play"></i>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
