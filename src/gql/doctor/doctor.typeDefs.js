import {gql} from '@apollo/client';

export const GQL_DOCTORS_BY_CATEGORY = gql`
  query GetDoctorsByCategory($category: String!, $limit: Int) {
    getDoctorsByCategory(category: $category, limit: $limit) {
      id
      fullName
      photoUrl
      gender
    }
  }
`;
