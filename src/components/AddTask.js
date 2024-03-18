import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/addTask.css";

const AddTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "low",
  });
  const dispatch = useDispatch();

  const addTask = () => {
    if (newTask.title.trim()) {
      dispatch({ type: "ADD_TASK", payload: { ...newTask, completed: false } });
      setNewTask({ title: "", description: "", priority: "low" });
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Título"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <select
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
      <button onClick={addTask}>Agregar Tarea</button>
    </div>
  );
};

export default AddTask;
