import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {tasks.map(task => <Task key={task.id} text={task.text} id={task.id} category={task.category} handleDelete={handleDelete}/>)}
      </ul>
    </div>
  );
}

export default TaskList;
