import { Task } from "@/types/Task";
import {
  DeleteButton,
  TaskCardWrapper,
  TaskDescription,
  TaskFooter,
  TaskHeader,
  TaskTitle,
} from "@/components/csr/widget/task/card/card.styled";
import { useCallback } from "react";
import { deleteTask } from "@/app/actions/task/task";

export const TaskCard = ({ task }: { task: Task }) => {
  const handleDelete = useCallback(() => {
    deleteTask(Number(task.id));
  }, []);

  return (
    <TaskCardWrapper>
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <DeleteButton onClick={handleDelete}>✖</DeleteButton>
      </TaskHeader>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskFooter>Status: {task.status ?? "–"}</TaskFooter>
    </TaskCardWrapper>
  );
};
