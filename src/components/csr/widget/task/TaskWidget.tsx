import { TaskPageWrapper } from "@/components/csr/widget/task/TaskPageWrapper";
import { getTasks } from "@/app/actions/task/task";

export const TaskWidget = async () => {
  try {
    const { tasks } = await getTasks();

    return <TaskPageWrapper tasks={tasks} />;
  } catch (error) {
    console.error("GraphQL fetch failed:", error);
    return <p style={{ color: "red" }}>⚠️ Failed to load tasks.</p>;
  }
};
