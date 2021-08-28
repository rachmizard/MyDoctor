import {gql} from '@apollo/client';

export const rootTypeDef = gql`
  extend input FileUploadInput {
    base64: String
    uri: String
    width: Int
    height: Int
    fileSize: Int
    type: String
    fileName: String
  }

  extend input UserInput {
    email: String
    fullName: String
    job: String
    password: String
    photoUrl: String
  }
`;
