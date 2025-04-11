export interface Task {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
}
export interface TaskResponse extends Task {
  id: number;
}
