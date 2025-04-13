"use client";

import { TaskResponse } from "@/types/Task";
import {
  TaskListInner,
  TaskListWrapper,
} from "@/components/csr/widget/task/TaskListWrapper";
import { TaskCard } from "@/components/csr/widget/task/TaskCard";

export const TaskPageWrapper = ({ tasks }: { tasks: TaskResponse[] }) => {
  return (
    <TaskListWrapper>
      <TaskListInner>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </TaskListInner>
    </TaskListWrapper>
  );
};
