import Header from "./components/Header";
import LoginUser from "./pages/loginPage/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AddUser from "./pages/signupPage/SignUpPage.jsx";
import "./App.css";
import { Route, Routes } from 'react-router';
import HandleTasks from "./pages/userPage/TasksPage.jsx";
import { useState } from "react";
// import axios from 'axios';

function App() {
  // const [userTasks, setUserTasks] = useState('');
  const [userId, setUserId] = useState('');
  const [testUrl, setTestUrl] = useState(`public/0/tasks`)

  const handleDataFromChild = (async (data) => {
    // await setUserId(data[0]);
    await setTestUrl(data[0]);
    await setUserId(data[1]);
    // await setUserTasks(data[1]);
    // console.log(userId)
  });

  return (
    <Routes>
      {/* index shortcut for path="/" */}
      <Route index element={<HomePage onDataReceived={handleDataFromChild} mytesturl={testUrl}/>}></Route>
      <Route path="signup" element={<AddUser/>}/>
      <Route path={testUrl} element={<HandleTasks userId={userId}/>}/>
    </Routes>
  );
}

export default App;
