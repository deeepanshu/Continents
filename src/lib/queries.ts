import { gql } from '@apollo/client';

/**
 * Query to load continent names along with their codes
 */
export const LIST_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

/**
 * Query to load particular continent along with their other details
 */
export const GET_CONTINENT = gql`
  query($code: ID!){
    continent (code: $code) {
      code
      name
      countries {
        code
        name
        native
        phone
        emoji
        capital
        languages {
          name
        }
        currency
      }
    }
  }
`;