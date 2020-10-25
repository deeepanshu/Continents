import { gql } from '@apollo/client';

export const LIST_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

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