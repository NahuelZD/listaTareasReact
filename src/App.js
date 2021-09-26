import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Componentes/header/header";
import AddTask from "./Componentes/ToDo/AddTask";
import TaskList from "./Componentes/ToDo/TaskList";
import { Container } from "react-bootstrap";

function App() {
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(localTasks);
  console.log('Tareas: ',tasks)
  const handleAddTask = (addTask) => {
    console.log(addTask);
    const newTasks = [...tasks, addTask];
    localStorage.setItem('tasks',JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <Container fluid="md">
        <Header />
        <AddTask handleAddTaskParent={handleAddTask} />
        <TaskList tasksToRender={tasks} />
      </Container>
    </Fragment>
  );
}

export default App;
