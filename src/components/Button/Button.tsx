import React from 'react';
import { StyledButton } from './style';

type ButtonProps = {
  children: string;
  handleCheck: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, handleCheck }) => {
  return <StyledButton onClick={handleCheck}>{children}</StyledButton>;
};

export default Button;
