import useTasks from "../hooks/useTasks";
import ITask from "../schema/ITask";

export default function TaskListItem(taks: ITask) {
  const { deleteTaskById, markAsCompletedById } = useTasks();

  const handleMarkComplete = () => {
    markAsCompletedById(taks.id, !taks.isCompleted);
  };

  const handleDelete = () => {
    deleteTaskById(taks.id);
  };

  return (
    <tr>
      <td>{taks.title}</td>
      <td>{taks.description}</td>
      <td>{taks.priority}</td>
      <td>
        <button onClick={handleMarkComplete}>
          <i className="fa-solid fa-check" />
        </button>
        <button onClick={handleDelete}>
          <i className="fa-solid fa-trash" />
        </button>
      </td>
    </tr>
  );
}
