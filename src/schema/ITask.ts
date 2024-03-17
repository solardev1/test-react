export const enum Priority {
  LOW = 'Baja',
  MEDIUM = 'Media',
  HIGH = 'Alta'
}

export default interface ITask {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  isCompleted: boolean;
}

export interface addTaskProps {
  title: string;
  description: string;
  priority: Priority;
}