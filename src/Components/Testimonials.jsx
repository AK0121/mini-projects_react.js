import React, { useState } from "react";
import styles from "./Styles/testimonials.module.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This website is just wo.. apna ye awesome",
      author: "Rohit Sharma",
    },
    {
      quote: "yed bhaga daali kya vishay banayela bro...",
      author: "MC Stan",
    },
    {
      quote: "Ohye! Ye website achi nahi bohot achi h bohot achi...",
      author: "Sunny Deol",
    },
    {
      quote: "Jor Jor se bolke logo ko bata raha hu ye bohot achi scheme h",
      author: "Akshay kumar",
    },
    {
      quote: "It's your boy using the best website",
      author: "Yo Yo honey singh",
    },
    {
      quote: "Deviyo aur sajano iss website ko me deta hu 7 cr....",
      author: "Amitabh Bachan",
    },
    {
      quote: "Aey vedeya website use kar warna hahahahahahahahaha.....",
      author: "Sachin tendulkar",
    },
  ];

  const handlePrevious = (e) => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }
  
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsQuote}>
        {testimonials[currentIndex].quote}
      </div>

      <div className={styles.testimonialsAuthor}>
        - {testimonials[currentIndex].author}
      </div>

      <div className={styles.testimonialsNav}>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
