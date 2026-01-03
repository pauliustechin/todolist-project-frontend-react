import "./TasksGrid.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function TasksGrid({ userId }) {
  // const tasksData = [
  //   {
  //     taskId: 1,
  //     task: "Wash dishes",
  //     taskDate: "2025-01-03",
  //   },
  //   {
  //     taskId: 2,
  //     task: "Go to the gym",
  //     taskDate: "2025-01-03",
  //   },
  // ];

  const [taskData, setTaskData] = useState([]);
  const userUrl = `http://localhost:8080/api/public/users/${userId}/task`

  useEffect(() => {
    axios.get(userUrl).then((response) => {
      setTaskData(response.data);
    });
  }, []);


  return (
    <div className="tasks-grid">
      {taskData.map((task) => {
        return (
          <div key={task.taskId} className="tasks-container">
            <div>
              <p>
                {task.task} 
              </p>
              {/* <span>
                {task.taskDate} 
              </span> */}
            </div>
            <div>
              <button className="remove-task-btn">Remove task</button>
              <button  className="update-task-btn">Update date</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksGrid;
