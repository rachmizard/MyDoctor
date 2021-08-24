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
