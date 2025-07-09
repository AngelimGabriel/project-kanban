import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { statusTypes, categoriaTypes } from "../../utils/estilos";
import { tasks } from "../../utils/tasks";
import { shemaTaskEdit } from "../../utils/yupSchema";

const EditTask = (props) => {
  const { onTaskClick, task } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shemaTaskEdit),
    defaultValues: {
      titulo: task.titulo,
      descricao: task.descricao,
      prioridade: task.prioridade,
      responsavel: task.responsavel,
      deadline: task.deadline,
      categoria: task.categoria,
      status: task.status,
    },
  });

  const onSubmit = (data) => {
    const newData = {
      ...data,
      id: task.id,
    };
    const index = tasks.findIndex((v) => v.id === task.id);
    tasks[index] = newData;
    const tasksStringify = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksStringify);
    onTaskClick("none");
  };

  return (
    <div className="p-6 flex flex-col flex-1 justify-center items-center bg-[#EBEBEB]">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white max-w-96 w-full flex flex-col gap-3 items-center p-6">
        <FontAwesomeIcon onClick={() => onTaskClick("none")} className="bg-sky-500 w-full py-1.5 rounded-4xl cursor-pointer hover:bg-sky-600 transition duration-300" icon={faLeftLong} size="xl" style={{ color: "#ffffff" }} />
        <div className="flex flex-col flex-1 justify-center gap-3 w-full">
          <input
            type="text"
            placeholder="Título"
            {...register("titulo")}
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
          />
          {errors.titulo && <span>{errors.titulo.message}</span>}
          <input
            type="text"
            placeholder="Descrição"
            {...register("descricao")}
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
          />
          {errors.descricao && <span>{errors.descricao.message}</span>}
          <select {...register("prioridade")} className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10">
            <option value="">Selecione uma prioridade</option>
            <option value="Normal">Normal</option>
            <option value="Importante">Importante</option>
            <option value="Urgente">Urgente</option>
          </select>
          {errors.prioridade && <span>{errors.prioridade.message}</span>}
          <input
            type="text"
            placeholder="Responsável"
            {...register("responsavel")}
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
          />
          {errors.responsavel && <span>{errors.responsavel.message}</span>}
          <input
            type="date"
            placeholder="Deadline"
            {...register("deadline")}
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
          />
          {errors.deadline && <span>{errors.deadline.message}</span>}
          <select {...register("status")} className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10">
            <option value="">Selecione o status da task</option>
            {Object.keys(statusTypes).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.status && <span>{errors.status.message}</span>}
          <select {...register("categoria")} className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10">
            <option value="">Selecione a nova categoria da task</option>
            {Object.keys(categoriaTypes).map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {errors.categoria && <span>{errors.categoria.message}</span>}
          <button className="w-full bg-sky-500 text-white h-10 rounded-lg hover:bg-sky-600 transition duration-300 cursor-pointer" type="submit">
            Modificar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
