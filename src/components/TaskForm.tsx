import "../assets/css/TaskForm.css";
import { useState } from "react";
import { Priority, addTaskProps } from "../schema/ITask";
import useTasks from "../hooks/useTasks";
import Button from "./Button";

export default function TaskForm() {
  const { addtask } = useTasks();

  const [formState, setFormState] = useState<addTaskProps>({
    title: "",
    description: "",
    priority: Priority.LOW,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({
      ...formState,
      priority: e.target.value as Priority,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addtask(formState);
    setFormState({
      title: "",
      description: "",
      priority: Priority.LOW,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="card form">
      <div className="form-group">
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Prioridad</label>
        <select
          className="form-control"
          id="priority"
          name="priority"
          value={formState.priority}
          onChange={handleSelectChange}
        >
          <option value={Priority.LOW}>{Priority.LOW}</option>
          <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
          <option value={Priority.HIGH}>{Priority.HIGH}</option>
        </select>
      </div>
      <Button type="submit" className="form-btn">
        Agregar
      </Button>
    </form>
  );
}
