import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/taskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // const filter = useSelector((state) => state.filter);
  const [filterValue, setFilterValue] = useState("all");

  const toggleCompleted = (index) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: index });
  };

  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  };

  const filteredTasks =
    filterValue === "all"
      ? tasks
      : filterValue === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="filter">Filtrar por prioridad:</label>
        <select id="filter" value={filterValue} onChange={handleFilterChange}>
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => toggleCompleted(index)}
            >
              <strong>{task.title}</strong>
              <br />
              {task.description}
            </span>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
