import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header.jsx";
import { useNavigate, Link } from 'react-router';


function LoginUser({ onDataReceived }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [urlPath, setUrlPath] = useState("");
  // const [userId, setUserId] = useState(0);
  const navigateTo = useNavigate();

  const checkIfUserExists = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });
      await setUsername("");
      await setPassword("");
      // await setUserId(response.data);
      // await console.log(userId);
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
  }



  return (
    <>
    <Header />
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
    </>
  );
}

export default LoginUser;
