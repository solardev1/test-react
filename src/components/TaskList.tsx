import useTasks from "../hooks/useTasks";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descricion</th>
            <th>Prioridad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskListItem key={task.id} {...task} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
