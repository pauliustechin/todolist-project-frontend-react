import { useState } from 'react';
import './TasksPage.css';
import TasksGrid from './TasksGrid.jsx';
import axios from 'axios';

function HandleTasks(){

  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = await (e) => {
    e.pre
  }

  return(
    <main className="task-container">
      <form className='task-form'>
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)} required/>
        <label htmlFor="taskDate">Date:</label>
        <input type="date" id="taskDate" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required/>
        <input type="submit" value="Add task" id="add-button"/>
      </form>
      <TasksGrid/>
    </main>
  );
}

export default HandleTasks;