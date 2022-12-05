import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="animate__animated animate__zoomIn bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold">Title: {task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-lg mt-3 mb-3">
        <b>Description:</b>
        <br />
        {task.description}
      </p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1 mt-3">
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
