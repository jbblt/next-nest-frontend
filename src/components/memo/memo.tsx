"use client";

import styled from "styled-components";

export const MemoPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 10rem;
  }
`;
