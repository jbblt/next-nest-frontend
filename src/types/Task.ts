export interface Task {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  id?: number;
}
export interface TaskResponse {
  tasks: Task[];
}
