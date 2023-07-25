import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 470px;
  height: 68px;
  border-radius: 88px;
  background: linear-gradient(135deg, #fff 0%, #f2f2f2 100%);
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.2), -2px -4px 12px 0px #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

type ButtonProps = {
  children: string;
  handleCheck: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, handleCheck }) => {
  return <StyledButton onClick={handleCheck}>{children}</StyledButton>;
};

export default Button;
