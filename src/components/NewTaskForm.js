import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText(""); 
    setCategory("Code"); 
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} data-testid="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <button type="submit">Add task</button> 
    </form>
  );
}

export default NewTaskForm;
