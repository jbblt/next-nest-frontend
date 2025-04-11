import gql from "graphql-tag";

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      status
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $description: String, $status: String) {
    createTask(title: $title, description: $description, status: $status) {
      id
      title
      description
      createdAt
    }
  }
`;
