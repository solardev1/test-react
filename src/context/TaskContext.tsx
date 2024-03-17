import React, { createContext, useState } from "react";
import tasksData from "../mockdata/tasks";
import ITask from "../schema/ITask";

interface TaskConextProviderProps {
  children: React.ReactNode;
}

interface TaskContextProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  setTasks: () => {},
});

export default function TaskConextProvider({
  children,
}: TaskConextProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>(tasksData);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
