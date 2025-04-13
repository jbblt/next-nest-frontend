"use client";

import styled from "styled-components";

export const TaskListWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding: 1.5rem 2.5rem;
  scroll-padding-left: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskListInner = styled.div`
  display: flex;
  gap: 1rem;
`;
