import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faPen, faPlus, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { prioridadeColors, statusColors, cardColors } from "../../utils/estilos";

const Main = (props) => {
  const stringTasks = localStorage.getItem("tasks");
  const tasks = JSON.parse(stringTasks);
  const { onTaskClick } = props;
  return (
    <div className="bg-[#EBEBEB] flex flex-1 w-full overflow-x-auto p-6 gap-3">
      <div className="md:overflow-y-auto md:w-[calc(100%_/_3)] overflow-y-auto md:shrink shrink-0 w-full rounded-md gap-3 flex flex-col items-center bg-gray-50 p-3.5">
        <div className="w-full flex justify-between h-7">
          <h1 className="flex-1 text-center content-center font-medium">To do</h1>
          <FontAwesomeIcon
            onClick={() => onTaskClick("add")}
            className={`gap-1.5 flex justify-center items-center py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-300`}
            icon={faPlus}
            size="sm"
            style={{ color: "#8f8f8f" }}
          />
        </div>
        <hr className={`w-full ${cardColors["To Do"]} border-t-2`} />
        {tasks
          .filter((v) => v.categoria == "To Do")
          .map((task, index) => (
            <div key={index} className={`flex flex-col gap-3 border-l-4 border-1 ${cardColors[task.categoria]} p-3 w-full rounded-md`}>
              <h1>{task.titulo}</h1>
              <small>{task.descricao}</small>
              <div className="select-none flex gap-1.5 flex-wrap">
                <small className={`px-2 py-1 rounded-sm ${statusColors[task.status]}`}>{task.status}</small>
                <small className={`h-7 px-2 py-1 rounded-sm ${prioridadeColors[task.prioridade]}`}>{task.prioridade}</small>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{task.responsavel}</small>
                </div>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faCalendarDay} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{new Date(task.deadline + "T03:00:00").toLocaleDateString("pt-BR", { month: "short", day: "2-digit" })}</small>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <FontAwesomeIcon
                  onClick={() => onTaskClick("delete", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-300 w-full`}
                  icon={faPen}
                  size="sm"
                  style={{ color: "#8f8f8f" }}
                />
                <FontAwesomeIcon
                  onClick={() => onTaskClick("edit", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-red-800 hover:text-red-200 text-red-800 transition duration-300`}
                  icon={faTrashCan}
                  size="sm"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="md:overflow-y-auto md:w-[calc(100%_/_3)] overflow-y-auto md:shrink shrink-0 w-full rounded-md gap-3 flex flex-col items-center bg-gray-50 p-3.5">
        <h1 className="font-medium content-center h-7">Doing</h1>
        <hr className={`w-full ${cardColors["Doing"]} border-t-2`} />
        {tasks
          .filter((v) => v.categoria == "Doing")
          .map((task, index) => (
            <div key={index} className={`flex flex-col gap-3 border-l-4 border-1 ${cardColors[task.categoria]} p-3 w-full rounded-md`}>
              <h1>{task.titulo}</h1>
              <small>{task.descricao}</small>
              <div className="select-none flex gap-1.5 flex-wrap">
                <small className={`px-2 py-1 rounded-sm ${statusColors[task.status]}`}>{task.status}</small>
                <small className={`h-7 px-2 py-1 rounded-sm ${prioridadeColors[task.prioridade]}`}>{task.prioridade}</small>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{task.responsavel}</small>
                </div>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faCalendarDay} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{new Date(task.deadline + "T03:00:00").toLocaleDateString("pt-BR", { month: "short", day: "2-digit" })}</small>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <FontAwesomeIcon
                  onClick={() => onTaskClick("delete", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-300 w-full`}
                  icon={faPen}
                  size="sm"
                  style={{ color: "#8f8f8f" }}
                />
                <FontAwesomeIcon
                  onClick={() => onTaskClick("edit", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-red-800 hover:text-red-200 text-red-800 transition duration-300`}
                  icon={faTrashCan}
                  size="sm"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="md:overflow-y-auto md:w-[calc(100%_/_3)] overflow-y-auto md:shrink shrink-0 w-full rounded-md gap-3 flex flex-col items-center bg-gray-50 p-3.5">
        <h1 className="font-medium content-center h-7">Done</h1>
        <hr className={`w-full ${cardColors["Done"]} border-t-2`} />
        {tasks
          .filter((v) => v.categoria == "Done")
          .map((task, index) => (
            <div key={index} className={`flex flex-col gap-3 border-l-4 border-1 ${cardColors[task.categoria]} p-3 w-full rounded-md`}>
              <h1>{task.titulo}</h1>
              <small>{task.descricao}</small>
              <div className="select-none flex gap-1.5 flex-wrap">
                <small className={`px-2 py-1 rounded-sm ${statusColors[task.status]}`}>{task.status}</small>
                <small className={`h-7 px-2 py-1 rounded-sm ${prioridadeColors[task.prioridade]}`}>{task.prioridade}</small>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{task.responsavel}</small>
                </div>
                <div className={`gap-1.5 flex justify-center items-center h-7 px-2 rounded-sm border-1 border-gray-300 whitespace-nowrap`}>
                  <FontAwesomeIcon icon={faCalendarDay} size="sm" style={{ color: "#8f8f8f" }} />
                  <small>{new Date(task.deadline + "T03:00:00").toLocaleDateString("pt-BR", { month: "short", day: "2-digit" })}</small>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <FontAwesomeIcon
                  onClick={() => onTaskClick("delete", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-300 w-full`}
                  icon={faPen}
                  size="sm"
                  style={{ color: "#8f8f8f" }}
                />
                <FontAwesomeIcon
                  onClick={() => onTaskClick("edit", task)}
                  className={`py-1.5 px-2 rounded-sm border-1 border-gray-300 cursor-pointer hover:bg-red-800 hover:text-red-200 text-red-800 transition duration-300`}
                  icon={faTrashCan}
                  size="sm"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
