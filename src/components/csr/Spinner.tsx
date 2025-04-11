import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.primary};
  border-top: 16px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
