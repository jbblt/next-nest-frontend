export const LOGIN_USER = `
  mutation LoginUser($email: String!) {
    loginUser(email: $email)
  }
`;
