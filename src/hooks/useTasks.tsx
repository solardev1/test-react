import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import ITask, { addTaskProps } from "../schema/ITask";

export default function useTasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  const addtask = ({ title, description, priority }: addTaskProps) => {
    const newTask: ITask = {
      id: tasks.length + 1,
      isCompleted: false,
      title,
      description,
      priority,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTaskById = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const markAsCompletedById = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      }
      return task;
    });

    setTasks(newTasks);
  };

  return { tasks, setTasks, addtask, markAsCompletedById, deleteTaskById };
}
