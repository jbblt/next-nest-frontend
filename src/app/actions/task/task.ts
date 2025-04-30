"use server";
import { revalidatePath } from "next/cache";
import { fetchGraphQL } from "@/lib/graphql/graphQLClient";
import { CREATE_TASK, DELETE_TASK, GET_TASKS } from "@/graphql/task/task";
import { TaskResponse } from "@/types/Task";

export async function createTask(formData: {
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
}) {
  await fetchGraphQL(CREATE_TASK, formData);
  revalidatePath("/");
}

export async function getTasks() {
  return await fetchGraphQL<TaskResponse>(GET_TASKS, {
    cache: "no-store",
  });
}

export async function deleteTask(id: number) {
  console.log(id, typeof id);
  await fetchGraphQL(DELETE_TASK, { id: Number(id) });
  revalidatePath("/");
}
