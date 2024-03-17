import { useMemo, useState } from "react";
import "../assets/css/TaskList.css";
import useTasks from "../hooks/useTasks";
import Button from "./Button";
import TaskListItem from "./TaskListItem";
import { Priority } from "../schema/ITask";

export default function TaskList() {
  const { tasks } = useTasks();
  const [selectedFilter, setSelectedFilter] = useState<Priority | undefined>();

  const renderedTasks = useMemo(() => {
    if (!selectedFilter)
      return tasks.map((task) => <TaskListItem key={task.id} {...task} />);

    if (selectedFilter === Priority.LOW)
      return tasks
        .filter((task) => task.priority === Priority.LOW)
        .map((task) => <TaskListItem key={task.id} {...task} />);

    if (selectedFilter === Priority.MEDIUM)
      return tasks
        .filter((task) => task.priority === Priority.MEDIUM)
        .map((task) => <TaskListItem key={task.id} {...task} />);

    if (selectedFilter === Priority.HIGH)
      return tasks
        .filter((task) => task.priority === Priority.HIGH)
        .map((task) => <TaskListItem key={task.id} {...task} />);
  }, [selectedFilter, tasks]);

  const handleFilter = (priority: Priority | undefined) => () => {
    setSelectedFilter(priority);
  };

  return (
    <section className="card task-list">
      <ul className="filter">
        <li>
          <Button
            className={`filter-button ${!selectedFilter ? "selected" : ""}`}
            onClick={handleFilter(undefined)}
          >
            Todas
          </Button>
        </li>
        <li>
          <Button
            className={`filter-button Baja${selectedFilter === Priority.LOW ? "-selected" : ""}`}
            onClick={handleFilter(Priority.LOW)}
          >
            Baja
          </Button>
        </li>
        <li>
          <Button
            className={`filter-button Media${selectedFilter === Priority.MEDIUM ? "-selected" : ""}`}
            onClick={handleFilter(Priority.MEDIUM)}
          >
            Media
          </Button>
        </li>
        <li>
          <Button
            className={`filter-button Alta${selectedFilter === Priority.HIGH ? "-selected" : ""}`}
            onClick={handleFilter(Priority.HIGH)}
          >
            Alta
          </Button>
        </li>
      </ul>

      <table>
        <thead className="headers">
          <tr>
            <th>Titulo</th>
            <th>Descricion</th>
            <th>Prioridad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="tasks">{renderedTasks}</tbody>
      </table>
    </section>
  );
}
