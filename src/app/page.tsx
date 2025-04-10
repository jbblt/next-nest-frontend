import { getClient } from "@/lib/apollo-client";
import { GET_TASKS } from "@/graphql/task/task";

export default async function Home() {
  const { data } = await getClient().query({ query: GET_TASKS });

  return (
    <div>
      <h1>Home Page</h1>
      <span>Todo add Dashboard here</span>

      <h2>Tasks</h2>
      <ul>
        {data.tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
