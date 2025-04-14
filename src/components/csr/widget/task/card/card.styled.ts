import styled from "styled-components";

export const TaskCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors.card};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  padding: 1.2rem;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  transition: all 0.3s ease;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 0 0 85%;
  max-width: 85%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex: 0 0 300px;
    max-width: 300px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowHover};
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const TaskDescription = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.95rem;
  flex-grow: 1;
`;

export const TaskFooter = styled.div`
  margin-top: 0.8rem;
  font-size: 0.8rem;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
