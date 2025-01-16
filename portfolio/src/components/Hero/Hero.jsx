import React from "react";
import styles from "./Hero.module.css";
import yuggyImage from "../../jy.png"; // Import the image directly

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Yug Vashisth</h1>
        <p className={styles.description}>
          I am a second year Software Engineering student at McMaster University!
        </p>
        <a href="mailto:yugdv27@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* Use the imported image */}
      <img
        src={yuggyImage}
        alt="yug pfp"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
