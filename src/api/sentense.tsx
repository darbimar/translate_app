import { gql } from '@apollo/client';
export const GET_SENTENCE = gql`
  query {
    sentence {
      ru
      en
    }
  }
`;
