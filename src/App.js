import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./css/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Lista de Tareas</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
