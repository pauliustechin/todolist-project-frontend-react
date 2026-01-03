import LoginUser from "./pages/loginPage/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AddUser from "./pages/signupPage/SignUpPage.jsx";
import "./App.css";
import { Route, Routes } from "react-router";
import HandleTasks from "./pages/userPage/TasksPage.jsx";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [urlPath, setUrlPath] = useState("");

  const handleDataFromChild = async (data) => {
    await setUserId(data[0]);
    const myUrl = await data[1];
    await setUrlPath(myUrl);
  };

  console.log(userId);
  console.log(urlPath);

  return (
      <Routes>
        <Route index element={<HomePage onDataReceived={handleDataFromChild} />}></Route>
        <Route path="login" element={<LoginUser onDataReceived={handleDataFromChild}/>}></Route>
        <Route path="signup" element={<AddUser />} />
        <Route path="user/tasks" element={<HandleTasks userId={userId} />} />
      </Routes>
  );
}

export default App;
