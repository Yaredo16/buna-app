import { FaTrash, FaCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task._id}>
          <span>{task.task}</span>

          <button onClick={() => deleteTask(task._id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
