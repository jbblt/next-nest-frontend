import styled from "styled-components";
import { TaskResponse } from "@/types/Task";

export const TaskCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors.card};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  transition: all 0.3s ease;

  flex: 0 0 85%;
  max-width: 85%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex: 0 0 300px; /* largeur fixe en desktop */
    max-width: 300px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowHover};
  }
`;
const TaskTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

const TaskDescription = styled.p`
  color: ${({ theme }) => theme.colors.light};
`;

export const TaskCard = ({ task }: { task: TaskResponse }) => {
  return (
    <TaskCardWrapper>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskCardWrapper>
  );
};
