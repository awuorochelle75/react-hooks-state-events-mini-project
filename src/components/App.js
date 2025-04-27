import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h1>My tasks</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
