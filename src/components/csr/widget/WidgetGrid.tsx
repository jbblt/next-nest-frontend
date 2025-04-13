"use client";
import styled from "styled-components";

export const WidgetGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto auto;
  gap: 1rem;
  width: 100%;
  min-height: 100%;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  transition: all 0.3s ease;
  border-radius: 1rem;
  flex: 1;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
`;
