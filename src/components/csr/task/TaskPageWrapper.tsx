"use client";

import { TaskResponse } from "@/types/Task";
import { WidgetWrapperXL } from "@/components/csr/widget/WidgetWrapperXL";
import {
  TaskListInner,
  TaskListWrapper,
} from "@/components/csr/task/TaskListWrapper";
import { TaskCard } from "@/components/csr/task/TaskCard";

export const TaskPageWrapper = ({ tasks }: { tasks: TaskResponse[] }) => {
  return (
    <WidgetWrapperXL>
      <TaskListWrapper>
        <TaskListInner>
          {tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </TaskListInner>
      </TaskListWrapper>
    </WidgetWrapperXL>
  );
};
