import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($payload: UserInput!) {
    userSignUp(payload: $payload) {
      id
      fullName
      email
      job
      token
      photoUrl
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
      photoUrl
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

export const UPLOAD_USER_PHOTO = gql`
  mutation UploadUserPhoto($file: FileUploadInput!) {
    uploadUserPhoto(file: $file) {
      success
      url
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
      photoUrl
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $payload: UserInput!) {
    updateUser(id: $id, payload: $payload) {
      id
      email
      fullName
      job
      photoUrl
    }
  }
`;
