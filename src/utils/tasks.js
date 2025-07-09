let parsedTasks = [];
try {
  const stringTasks = localStorage.getItem("tasks");
  parsedTasks = JSON.parse(stringTasks);
} catch (e) {
  console.log("Não existem tasks:", e);
}
export const tasks = parsedTasks;
