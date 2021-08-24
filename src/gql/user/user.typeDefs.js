import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $fullName: String!
    $job: String!
  ) {
    userSignUp(
      email: $email
      password: $password
      fullName: $fullName
      job: $job
    ) {
      id
      fullName
      email
      job
      token
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    userSignIn(email: $email, password: $password) {
      id
      email
      fullName
      token
      job
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    userSignOut {
      status
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      email
      fullName
      job
    }
  }
`;
