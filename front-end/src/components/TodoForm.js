import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" placeholder="Add a task..." value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;