export default interface ITask {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  isCompleted: boolean;
}

export interface addTaskProps {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}