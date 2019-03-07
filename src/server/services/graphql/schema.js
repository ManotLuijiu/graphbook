const typeDefinitions = `
type Post {
  id: Int
  text: String
}

type RootQuery {
  posts: [Post]
}
schema {
  query: Rootquery
}
`;

export default [typeDefinitions];
