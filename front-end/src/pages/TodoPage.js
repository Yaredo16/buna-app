import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = "https://buna-task.onrender.com";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setTasks(res.data));
  }, []);

  const addTask = (task) => {
    axios.post(API_URL, { task }).then((res) => setTasks([...tasks, res.data]));
  };

  const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => setTasks(tasks.filter((task) => task._id !== id)));
  };

  return (
    <div>
    <NavBar />
    <main>
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
    </main>
    <Footer />
    </div>
  );
};

export default TodoPage;