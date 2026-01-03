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
  
  const [userId, setUserId] = useState('');
  const [urlPath, setUrlPath] = useState('');
  // const navigateTo = useNavigate();

  const handleDataFromChild = (async (data) => {
    await setUserId(data[0]);
    const myUrl = await (data[1]);
    await setUrlPath(myUrl);
    // navigateTo(urlPath);

  });



  // const handleTaskUpdate = (async (data) => {
  //   await setUserId(data);
  // });

    console.log(userId);
    console.log(urlPath);

  return (
    <Routes>
      {/* index shortcut for path="/" */}
      <Route index element={<HomePage onDataReceived={handleDataFromChild}/>}></Route>
      <Route path="signup" element={<AddUser/>}/>
      <Route path="user/tasks" element={<HandleTasks userId={userId}/>}/>
      {/* <Route path="user/tasks" element={<HandleTasks userId={userId} onUpdatedTasks={handleTaskUpdate}/>}/> */}
      {/* <Route path="user/tasks" render={([userId]) => <HandleTasks {...userId}/> }/> */}
    </Routes>
  );
}

export default App;
