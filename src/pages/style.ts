import { styled } from 'styled-components';

export const Title = styled.h1`
  color: #252525;
  text-shadow: -2px -4px 3px 0px #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrongMessage = styled.div`
  color: #f00;
  text-shadow: 1px 2px 2px 0px rgba(91, 13, 13, 0.5);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

export const CorrectMessage = styled(WrongMessage)`
  color: green;
`;
