import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "./SignUpPage.css";

function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validationElement = useRef();
  const navigateTo = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/public/users", {
          username,
          password,
        })
        .then(() => {
            setUsername("");
            setPassword("");
            navigateTo("/login");
        });

    } catch (error) {
      console.log("Error adding user: ", error);
      validationElement.current.style.visibility = "visible";
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <title>SignUp</title>
      <Header></Header>
      <main className="signup-container">
        <p className="signup-welcome">Please provide required information</p>
        <form onSubmit={handleSignUp}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Create new account" id="signup-btn" />
        </form>
        <p ref={validationElement} className="signup-validation">User with such username exists</p>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AddUser;
