import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      title
      description
      collaborationType
      requiredSkills
      projectLink
      comments
      user {
        username
        avatar
      }
    }
  }
`;
