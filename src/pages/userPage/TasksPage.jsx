import { useState, useEffect } from "react";
import "./TasksPage.css";
import axios from "axios";
// import { useNavigate } from 'react-router';

function HandleTasks({ userId }) {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskData, setTaskData] = useState([]);
  // const [taskId, setTaskId] = useState(0);
  const postTaskUrl = `http://localhost:8080/api/public/users/${userId}/task`;
  const getTasksUrl = `http://localhost:8080/api/public/users/${userId}/task`;

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

  const removeTask = async (event) => {
    const taskId = event.target.id;
    const removeTaskUrl = `http://localhost:8080/api/public/users/${taskId}`;
    await axios.delete(removeTaskUrl)
      .then(() => {
        fetchTasks();
      });
  }

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
        <input type="submit" value="Add task" className="tasks-btns add-task-button" />
      </form>
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
              <button className="tasks-btns remove-task-btn" id={task.taskId} onClick={removeTask}>Remove task</button>{}
            </div>
          </div>
        );
      })}
    </div>
    </main>
  );
}

export default HandleTasks;
