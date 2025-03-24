import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = "https://buna-app-3.onrender.com/api/todos";  

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL); 
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
    fetchTasks();
  }, []);

  
  const addTask = (task) => {
    axios.post(API_URL, { task }) 
      .then((res) => setTasks([...tasks, res.data]));
  };

  
  const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`) 
      .then(() => setTasks(tasks.filter((task) => task._id !== id)));
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
