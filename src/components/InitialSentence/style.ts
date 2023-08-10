import { styled } from 'styled-components';

export const SentenceWrapper = styled.div`
  position: relative;
`;

export const Text = styled.div`
  position: absolute;
  top: 17px;
  padding: 0 10px 0 20px;
  width: 100%;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    top: 7px;
    font-size: 12px;
  }
`;
