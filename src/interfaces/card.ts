export interface Card {
  id: string;
  title: string;
  description: string;
  priority: number;
  checkAsFinished?: boolean;
}
