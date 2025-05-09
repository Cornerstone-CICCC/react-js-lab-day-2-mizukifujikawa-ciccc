import { useState } from "react";
import { useUser } from "../contexts/useUser";
import { type Task } from "../types/task.types"
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const { userName, logout } = useUser();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), text: taskText }]);
    setTaskText("");
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-6 text-center font-bold">
          Welcome, {userName}!
        </h1>
        <p className="text-white mb-6 text-center">Have a great and productive day!</p>
        <button
          onClick={handleLogout}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-red-600 transition-all mb-6"
        >
          Log out
        </button>

        <div className="mb-6">
          

            <ul>
            {tasks.map((task) => (
                <li key={task.id} className="text-white flex justify-between items-center mb-2">
                {task.text}
                <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>

            <div className="flex gap-1">
                <input
                type="text"
                placeholder="Enter a new task..."
                className="p-3 w-full rounded-md mb-2 text-white bg-gray600"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />

            <button
                onClick={handleAddTask}
                className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
            >
                Add Task
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};


export default TodoPage;
