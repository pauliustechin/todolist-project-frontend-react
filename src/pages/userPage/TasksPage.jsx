import { useState, useEffect } from "react";
import "./TasksPage.css";
// import TasksGrid from "./TasksGrid.jsx";
import axios from "axios";
// import { useNavigate } from 'react-router';

function HandleTasks({ userId }) {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskData, setTaskData] = useState([]);
  // const [userId2] = useState(userId);
  const postTaskUrl = `http://localhost:8080/api/public/users/${userId}/task`;
  const getTasksUrl = `http://localhost:8080/api/public/users/${userId}/task`;
  // const navigateTo = useNavigate();

  const fetchTasks = async() => {
    await axios.get(getTasksUrl).then((response) => {
      const myTasks = response.data;
      setTaskData(myTasks);
    });
  }

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(postTaskUrl, { task, taskDate })
        .then(() => {
          fetchTasks();
        });
      // setTask("");
    } catch (error) {
      console.log("Error adding task: ", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="task-container">
      <form className="task-form" onSubmit={addTask}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <label htmlFor="taskDate">Date:</label>
        <input
          type="datetime-local"
          id="taskDate"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          required
        />
        <input type="submit" value="Add task" id="add-button" />
      </form>
      {/* <TasksGrid userId={userId2} onUpdate={fetchTasks}/> */}
      <div className="tasks-grid">
      {taskData.map((task) => {
        return (
          <div key={task.taskId} className="tasks-container">
            <div>
              <p>
                {task.task} 
              </p>
              <span>
                {task.taskDate} 
              </span>
            </div>
            <div>
              <button className="remove-task-btn">Remove task</button>
              <button  className="update-task-btn">Update date</button>
            </div>
          </div>
        );
      })}
    </div>
    </main>
  );
}

export default HandleTasks;
