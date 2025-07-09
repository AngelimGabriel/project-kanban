import { tasks } from "../../utils/Tasks.js";

const DeleteTask = (props) => {
  const { task, onTaskClick } = props;

  const deleteTask = () => {
    const index = tasks.findIndex((v) => v.id === task.id);
    tasks.splice(index, 1);
    const tasksStringify = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksStringify);
    onTaskClick("none");
  };

  return (
    <div className="flex flex-1 justify-center items-center p-6 bg-[#EBEBEB]">
      <div className="border bg-white rounded-2xl border-sky-600 flex flex-col justify-center items-center max-w-96 w-full p-6 gap-6">
        <h1>
          Deletar task: <strong>{task.titulo}</strong>
        </h1>
        <div className="flex gap-2">
          <button
            onClick={deleteTask}
            className="
            cursor-pointer 
            bg-green-500
            w-28
            px-6 
            py-1 
            rounded-4xl
            text-white 
            font-medium
            transition
            duration-300
            hover:bg-green-600
        "
          >
            Sim
          </button>
          <button
            onClick={() => onTaskClick("none")}
            className="
            cursor-pointer 
            bg-red-500
            w-28
            px-6 
            py-1 
            rounded-4xl
            text-white 
            font-medium
            transition
            duration-300
            hover:bg-red-600
        "
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
