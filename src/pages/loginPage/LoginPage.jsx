import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "./LoginPage.css";

function LoginUser({ onDataReceived }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const validationElement = useRef();

  const checkIfUserExists = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/login", {
          username,
          password,
        })
        .then((response) => {
          setUsername("");
          setPassword("");
          onDataReceived(response.data);
          navigateTo(`/user/tasks`);
        });
    } catch (error) {
      console.log("Error while logging in: ", error);
      validationElement.current.style.visibility = "visible";
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <title>LogIn</title>
      <Header></Header>
      <main className="login-container">
        <p className="login-welcome">Please login</p>
        <form id="login-form" onSubmit={checkIfUserExists}>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" id="login-btn"/>
        </form>
        <p ref={validationElement} className="login-validation">
          Username or Password is incorrect
        </p>
      </main>
      <Footer></Footer>
    </>
  );
}

export default LoginUser;
