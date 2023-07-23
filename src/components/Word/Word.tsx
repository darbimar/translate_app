import React, { Children } from 'react';
import styled from 'styled-components';

const WordWrapper = styled.div`
  width: 70px;
  height: 30px;
  padding: 4px 0;
  border-radius: 13px;
  border: 1px solid #c9c9c9;
  background: #fff;
  box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

type WordProps = {
  children?: string;
  draggable?: boolean;
};

const Word: React.FC<WordProps> = ({ children }) => {
  return <WordWrapper>{children}</WordWrapper>;
};

export default Word;
