import { getClient } from "@/lib/apollo-client";
import { GET_TASKS } from "@/graphql/task/task";
import { TaskPageWrapper } from "@/components/csr/widget/task/TaskPageWrapper";

export const TaskWidget = async () => {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_TASKS,
    });
    return <TaskPageWrapper tasks={data.tasks} />;
  } catch (error) {
    console.error("GraphQL fetch failed:", error);
    return <p style={{ color: "red" }}>⚠️ Failed to load tasks.</p>;
  }
};
