import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header.jsx";
import { useNavigate } from 'react-router';

function LoginUser({ onDataReceived }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  // const [userTaskData, setUserTaskData] = useState([]);

  const checkIfUserExists = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });
      setUsername("");
      setPassword("");

      const userId = response.data;
      return userId;
    } catch (error) {
      console.log("Error adding user: ", error);
    }
  };

  // const getUserData = async (userId) => {
  //   try{
  //     const fetchDataUrl = `localhost:8080/api/public/users/1/task`
  //     await axios.get(fetchDataUrl).then((response) => {
  //         setUserTaskData(response.data)
  //       });

  //   }
  //   catch (error){
  //     console.log("Error while fetchins user data: " + error)
  //   }
  // }

    const sendUserIdToParent = async (e) => {
      e.preventDefault();
      const userId = await checkIfUserExists();
      const testUrl = await `public/${userId}/tasks`;
      console.log(userId);
      onDataReceived([testUrl, userId]);
      navigateTo(testUrl);
      // getUserData(userId);
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
