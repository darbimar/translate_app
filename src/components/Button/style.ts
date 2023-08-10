import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 68px;
  border-radius: 88px;
  background: linear-gradient(135deg, #fff 0%, #f2f2f2 100%);
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.2), -2px -4px 12px 0px #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 500px) {
    height: 58px;
  }
  @media (max-width: 400px) {
    height: 48px;
  }
`;
