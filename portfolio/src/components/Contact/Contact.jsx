import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../send.svg";
import linkedIcon from "../../linkedin (3).svg";
import githubIcon from "../../github.svg";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:myemail@email.com">yugdv27@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/yugvashisth</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/yug-vashisth</a>
        </li>
      </ul>
    </footer>
  );
};
