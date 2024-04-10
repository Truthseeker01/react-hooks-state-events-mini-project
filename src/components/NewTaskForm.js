import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [ formData, setFormData ] = useState({
    text: "",
    category: ""
  })

  function handleSubmit(event){
    event.preventDefault()
    // console.log(formData)
    onTaskFormSubmit(formData)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"
        value={formData.text}
        onChange={(event) => setFormData({...formData, text: event.target.value})} />
      </label>
      <label>
        Category
        <select name="category"
        value={formData.category}
        onChange={(event) => setFormData({...formData, category: event.target.value})}>
          {/* render <option> elements for each category here */}
          {categories.map(category => (category !== "All") ? <option key={category}>{category}</option> : "")}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
