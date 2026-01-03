import "./Header.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

function Header() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigateTo = useNavigate();
 
  //   const checkIfUserExists = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:8080/api/login", {
  //         username,
  //         password,
  //       });
  //       setUsername("");
  //       setPassword("");

  //       const userId = response.data;
  //       return response.data

  //     } catch (error) {
  //       console.log("Error adding user: ", error);
  //     }
  //   };

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
      
  //     const userId = await checkIfUserExists();

  //     if(userId){
  //       // const userTasks = await axios.get($"localhost:8080/api/public/users/{userId.data}/task");
  //       // navigateTo(`/`+ userId.data);
  //       const userUrlPath = `http://localhost:8080/api/public/users/${userId.data}/task`
  //       navigateTo(userUrlPath);
  //     }
  //     else{
  //       console.log("User doesn't exist");
  //     }
  //   };

    

  return (
    <header className="header">
      <p>ToDoList</p>
      {/* <form id="login-form" onSubmit={handleLogin}>
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
      </form> */}
    </header>
  );



  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigateTo = useNavigate();
 
  //   const checkIfUserExists = async () => {
  //     try {
  //       const promise = await axios.post("http://localhost:8080/api/login", {
  //         username,
  //         password,
  //       });
  //       setUsername("");
  //       setPassword("");
  //       return promise;
  //     } catch (error) {
  //       console.log("Error adding user: ", error);
  //     }
  //   };

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
      
  //     const userId = await checkIfUserExists();

  //     if(userId){
  //       // const userTasks = await axios.get($"localhost:8080/api/public/users/{userId.data}/task");
  //       // navigateTo(`/`+ userId.data);
  //       const userUrlPath = `http://localhost:8080/api/public/users/${userId.data}/task`
  //       navigateTo(userUrlPath);
  //     }
  //     else{
  //       console.log("User doesn't exist");
  //     }
  //   };

    

  // return (
  //   <header className="header">
  //     <p>ToDoList</p>
  //     <form id="login-form" onSubmit={handleLogin}>
  //       <label htmlFor="username">Username:</label>
  //       <input
  //         type="text"
  //         id="username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //         required
  //       />
  //       <label htmlFor="password">Password:</label>
  //       <input
  //         type="password"
  //         id="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required
  //       />
  //       <input type="submit" value="Login" />
  //     </form>
  //   </header>
  // );
}

export default Header;
