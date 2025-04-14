export const searchTenFirstUsers = `query SearchTenFirstUsers {
  search(query: "type:user", type: USER, first: 10) {
    edges {
      node {
        ... on User {
          login
          name
          url
          avatarUrl
        }
      }
    }
  }
}`;
