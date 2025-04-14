export const GET_TASKS = `
  query GetTasks {
    tasks {
      id
      title
      status
      description
    }
  }
`;

export const CREATE_TASK = `
  mutation CreateTask($title: String!, $description: String, $status: String!) {
    createTask(title: $title, description: $description, status: $status) {
      id
      title
      description
      createdAt
    }
  }
`;

export const DELETE_TASK = `
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`;
