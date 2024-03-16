import ITask from "../schema/ITask";

const tasks: ITask[] = [
  {
    id: 1,
    title: "Aprender React",
    description: "usar un curso de Udemy para aprender React",
    priority: "high",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Aprender Flutter",
    description: "usar un curso de Udemy para aprender Flutter",
    priority: "medium",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Aprender Angular",
    description: "usar un curso de Udemy para aprender Angular",
    priority: "low",
    isCompleted: false,
  },
];

export default tasks;
