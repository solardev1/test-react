import useTasks from "../hooks/useTasks";
import ITask from "../schema/ITask";
import Button from "./Button";

export default function TaskListItem(task: ITask) {
  const { deleteTaskById, markAsCompletedById } = useTasks();

  const handleMarkComplete = () => {
    markAsCompletedById(task.id, !task.isCompleted);
  };

  const handleDelete = () => {
    deleteTaskById(task.id);
  };

  return (
    <tr className="task-list-item">
      <td>
        <p className={`title ${task.isCompleted ? "text-completed" : ""}`}>{task.title}</p>
      </td>
      <td>
        <p className={task.isCompleted ? "text-completed" : ""}>
          {task.description}
        </p>
      </td>
      <td>
        <div className="priority">
          <p className={task.priority}>{task.priority}</p>
        </div>
      </td>
      <td className="button-actions">
        <Button
          onClick={handleMarkComplete}
          className={task.isCompleted ? "completed" : "not-completed"}
        >
          <i className="fa-solid fa-check" />
        </Button>
        <Button onClick={handleDelete} className="delete">
          <i className="fa-solid fa-trash" />
        </Button>
      </td>
    </tr>
  );
}
