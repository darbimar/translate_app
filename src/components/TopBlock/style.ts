import { styled } from 'styled-components';

export const TopBlockWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  @media (max-width: 600px) {
    width: 160px;
  }
  @media (max-width: 500px) {
    width: 130px;
  }
  @media (max-width: 400px) {
    width: 100px;
  }
`;
