import React, { useState } from "react";

function CategoryFilter({categories, filter}) {
  const [ activeButton, setActiveButton ] = useState(null);

  
  function handleFilter(category, buttonId){
    setActiveButton(buttonId)
    filter(category);
    // console.log(category)
    // let filteredTasks;
    // switch (category) {
    //   case "All":
    //     filteredTasks = tasks
    //     break;
    //   case "Code":
    //     filteredTasks = tasks.filter(task => task.category === category)
    //     break;
    //   case "Food":
    //     filteredTasks = tasks.filter(task => task.category === category)
    //     break;
    //   case "Money":
    //     filteredTasks = tasks.filter(task => task.category === category)
    //     break;
    //   case "Misc":
    //     filteredTasks = tasks.filter(task => task.category === category)
    //     break;
    //   default:
    //     break;
    // }
    // setTasks(filteredTasks)
    // console.log(filteredTasks)
    }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => <button key={category} className={activeButton === index ? "selected" : ""} onClick={() => handleFilter(category, index)} >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;

