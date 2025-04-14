"use client";

import { Task } from "@/types/Task";
import TaskCreateForm from "@/components/csr/widget/task/TaskCreateForm";
import { TaskSlider } from "@/components/csr/widget/task/TaskSlider";
import styled from "styled-components";

export const TaskPageWrapper = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Wrapper>
      <TaskSlider tasks={tasks} />
      <TaskCreateForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
