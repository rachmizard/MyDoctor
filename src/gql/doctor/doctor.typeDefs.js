import {gql} from '@apollo/client';

export const GQL_DOCTORS_BY_CATEGORY = gql`
  query GetDoctorsByCategory($category: String!, $limit: Int) {
    getDoctorsByCategory(category: $category, limit: $limit) {
      id
      fullName
      photoUrl
      gender
      category
    }
  }
`;

export const GQL_DOCTOR_BY_ID = gql`
  query GetDoctorById($id: ID!) {
    getDoctorById(id: $id) {
      id
      fullName
      photoUrl
      gender
      category
      alumnus
      practicePlace
      strNumber
    }
  }
`;
