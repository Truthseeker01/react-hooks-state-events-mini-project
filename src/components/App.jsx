import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ tasks, setTasks ] = useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  function filter(category){
    setSelectedCategory(category)
  }

  const filteredTasks = (selectedCategory === "All") ? tasks : tasks.filter(task => task.category === selectedCategory)
  

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={filter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
