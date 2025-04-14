import { TaskCard } from "@/components/csr/widget/task/card/TaskCard";
import {
  TaskListInner,
  TaskListWrapper,
} from "@/components/csr/widget/task/TaskListWrapper";
import { Task } from "@/types/Task";

export const TaskSlider = ({ tasks }: { tasks: Task[] }) => {
  return (
    <TaskListWrapper>
      <TaskListInner>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskListInner>
    </TaskListWrapper>
  );
};
