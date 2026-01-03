import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

function LoginUser({ onDataReceived }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const checkIfUserExists = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });
      await setUsername("");
      await setPassword("");
      const userId = response.data;
      const urlPath = `user/tasks`;
      return [userId, urlPath];
    } catch (error) {
      console.log("Error adding user: ", error);
    }
  };

  const sendUserIdToParent = async (e) => {
    e.preventDefault();
    const [userId, urlPath] = await checkIfUserExists();
    // setUrlPath(`/user/${userId}/tasks`);
    onDataReceived([userId, urlPath]);
    navigateTo(`/user/tasks`);
  };

  return (
    <>
      <Header></Header>
      <form id="login-form" onSubmit={sendUserIdToParent}>
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
        <input type="submit" value="Login" />
      </form>
      <Footer></Footer>
    </>
  );
}

export default LoginUser;
