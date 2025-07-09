function UserData() {
  const userTasks = localStorage.getItem("tasks");
  if (!userTasks) localStorage.setItem("tasks", "[]");
}

export default UserData;
