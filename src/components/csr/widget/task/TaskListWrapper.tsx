"use client";

import styled from "styled-components";

export const TaskListWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  scroll-snap-type: x mandatory;
  padding: 0.5rem;
  scroll-padding-left: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskListInner = styled.div`
  display: flex;
  gap: 2rem;
`;
