import Header from "./components/Header";
import HomePage from "./pages/home/HomePage.jsx";
import AddUser from "./pages/signupPage/SignUpPage.jsx";
import "./App.css";
import { Route, Routes } from 'react-router';
import HndleTasks from "./pages/userPage/TasksPage.jsx";
import HandleTasks from "./pages/userPage/TasksPage.jsx";

function App() {
  return (
    <Routes>
      {/* index shortcut for path="/" */}
      <Route index element={<HomePage/>}></Route>
      <Route path="signup" element={<AddUser/>}/>
      <Route path="tasks" element={<HandleTasks/>}/>
    </Routes>
  );
}

export default App;
