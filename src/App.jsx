import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AddTask from "./components/Task/AddTask";
import EditTask from "./components/Task/EditTask";
import DeleteTask from "./components/Task/DeleteTask";

import UserData from "./utils/userData";
import { useState } from "react";

const App = () => {
  UserData();
  const auth = localStorage.getItem("auth") == "true";
  const actionTask = { add: "add", edit: "edit", delete: "delete", none: "none" };
  const [currentAction, setCurrentAction] = useState("none");
  const [editTask, setEditTask] = useState(null);

  const handleLoginClick = () => {
    if (auth) {
      localStorage.removeItem("auth");
      window.location.href = "/";
    }
  };
  const handleCurrentActionTaskClick = (typeTask, task = null) => {
    setEditTask(task);
    setCurrentAction(actionTask[typeTask]);
  };

  return (
    <div className="flex flex-col h-dvh">
      <Header onLoginClick={handleLoginClick} logged={auth} />
      {!auth ? (
        <Login />
      ) : currentAction === "none" ? (
        <Main onTaskClick={handleCurrentActionTaskClick} />
      ) : currentAction === "add" ? (
        <AddTask onTaskClick={handleCurrentActionTaskClick} />
      ) : currentAction === "delete" ? (
        <EditTask onTaskClick={handleCurrentActionTaskClick} task={editTask} />
      ) : (
        <DeleteTask onTaskClick={handleCurrentActionTaskClick} task={editTask} />
      )}
      <Footer />
    </div>
  );
};

export default App;
