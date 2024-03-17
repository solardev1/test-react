import ITask, { Priority } from "../schema/ITask";

const tasks: ITask[] = [
  {
    id: 1,
    title: "Aprender React",
    description: "usar un curso de Udemy para aprender React",
    priority: Priority.HIGH,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Aprender Flutter",
    description: "usar un curso de Udemy para aprender Flutter",
    priority: Priority.MEDIUM,
    isCompleted: true,
  },
  {
    id: 3,
    title: "Aprender Angular",
    description: "usar un curso de Udemy para aprender Angular",
    priority: Priority.LOW,
    isCompleted: false,
  },
];

export default tasks;
