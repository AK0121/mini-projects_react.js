import { useState } from "react";
import styles from "./Styles/accordion.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.accordionCard}>
      <div
        className={styles.header}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <div>{title}</div>
        <p className={styles.icon}>{isActive ? "-" : "+"}</p>
      </div>

      {/* Always render the content, toggle visibility via CSS */}
      <div className={`${styles.content} ${isActive ? styles.active : ""}`}>
        <p className={styles.cardInfo}>{content}</p>
      </div>
    </section>
  );
};

export default Accordion;
