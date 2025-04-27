export const LOGIN_USER = `
  mutation LoginUser($email: String!) {
    loginUser(email: $email)
  }
`;

export const LOGIN_USER_WITH_PASSWORD = `
  mutation LoginUserWithPassword($email: String!, $password: String!) {
    loginUserWithPassword(email: $email, password: $password)
  }
`;
