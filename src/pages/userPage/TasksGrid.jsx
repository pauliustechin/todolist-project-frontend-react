import "./TasksGrid.css";
// import axios from 'axios';

function TasksGrid() {
  const tasksData = [
    {
      taskId: 1,
      task: "Wash dishes",
      taskDate: "2025-01-03",
    },
    {
      taskId: 2,
      task: "Go to the gym",
      taskDate: "2025-01-03",
    },
  ];

  return (
    <div className="tasks-grid">
      {tasksData.map((task) => {
        return (
          <>
            <div key={task.id} className="tasks-container">
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
          </>
        );
      })}
    </div>
  );
}

export default TasksGrid;
