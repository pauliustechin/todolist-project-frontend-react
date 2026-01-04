import LoginUser from "./pages/loginPage/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AddUser from "./pages/signupPage/SignUpPage.jsx";
import "./App.css";
import { Route, Routes } from "react-router";
import HandleTasks from "./pages/tasksPage/TasksPage.jsx";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");

  const handleDataFromChild = (data) => {
    setUserId(data);
  };

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route
        path="login"
        element={<LoginUser onDataReceived={handleDataFromChild} />}
      ></Route>
      <Route path="signup" element={<AddUser />} />
      <Route path="user/tasks" element={<HandleTasks userId={userId} />} />
    </Routes>
  );
}

export default App;
