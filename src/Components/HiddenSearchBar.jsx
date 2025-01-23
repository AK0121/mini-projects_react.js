import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Styles/hiddenSearch.module.css";

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleContainerClick = (e) => {
    if(e.target === e.currentTarget){
      setShowInput(false);
      setBgColor("white");
    }
  }

  const handleSearchClick = (e) => {
    e.stopPropagation()
    setShowInput(true)
    setBgColor("white" ? "#1a1a1a" : "white")
  }

  return (
    <section
      className={styles.container}
      style={{ backgroundColor: bgColor }}
      onClick={handleContainerClick}
    >
      {showInput ? (
        <input className={styles.searchInput} type="text" placeholder="Search..." />
      ) : (
        <FaSearch style={{color: "black"}} onClick={handleSearchClick} />
      )}
    </section>
  );
}

export default HiddenSearchBar;