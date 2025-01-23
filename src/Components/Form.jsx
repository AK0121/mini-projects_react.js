import { useState } from "react";
import styles from "./Styles/form.module.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [userEmailColor, setUserEmailColor] = useState("");
  const [userPasswordColor, setUserPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleValidate = (e) => {
    e.preventDefault();

    let isValid = true;

    if (userName.length >= 8) {
      setUserNameColor("green");
      setUserNameError("");
    } else {
      setUserNameColor("red");
      setUserNameError("The name should contain at least 8 letters");
      isValid = false;
    }

    if (userEmail.includes("@gmail.com")) {
      setUserEmailColor("green");
      setUserEmailError("");
    } else {
      setUserEmailColor("red");
      setUserEmailError("Write valid email");
      isValid = false;
    }

    if (userPassword.length >= 8) {
      setUserPasswordColor("green");
      setUserPasswordError("");
    } else {
      setUserPasswordColor("red");
      setUserPasswordError("The password must contain at least 8 letters");
      isValid = false;
    }

    if (userPassword !== "" && userPassword === confirmPassword) {
      setConfirmPasswordColor("green");
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordColor("red");
      setConfirmPasswordError("The password not matching");
      isValid = false;
    }

    if (isValid === true) {
      setShowSuccess(!showSuccess);
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImage}></div>

        <form>
          <input
            type="text"
            placeholder="Enter your name..."
            style={{ borderColor: userNameColor }}
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className={styles.error}>{userNameError}</p>

          <input
            type="emial"
            placeholder="Enter a valid email..."
            style={{ borderColor: userEmailColor }}
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <p className={styles.error}>{userEmailError}</p>

          <input
            type="password"
            placeholder="Enter your password"
            style={{ borderColor: userPasswordColor }}
            name="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <p className={styles.error}>{userPasswordError}</p>

          <input
            type="password"
            placeholder="Confirm your password"
            style={{ borderColor: confirmPasswordColor }}
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className={styles.error}>{confirmPasswordError}</p>
          <button onClick={handleValidate} className={styles.submitBtn}>
            Submit
          </button>
        </form>
       {showSuccess && <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "90vw",
            margin: "auto",
            background: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "60px",
          }}
        >
          Successfully submited 🤗
        </div>}
      </div>
    </>
  );
};

export default Form;
