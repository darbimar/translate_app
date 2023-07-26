import React from 'react';
import InitialSentence from '../InitialSentence/InitialSentence';
import avatar from '../../assets/avatar.png';
import { styled } from 'styled-components';

const TopBlockWrapper = styled.div`
  display: flex;
`;

const TopBlock: React.FC = () => {
  return (
    <TopBlockWrapper>
      <img src={avatar} alt="" />
      <InitialSentence />
    </TopBlockWrapper>
  );
};

export default TopBlock;
