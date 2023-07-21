import React from 'react';
import Word from '../Word/Word';
import styled from 'styled-components';

const AnswerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const AnswerBlock: React.FC = () => {
  return (
    <AnswerWrapper>
      <Word />
    </AnswerWrapper>
  );
};

export default AnswerBlock;
