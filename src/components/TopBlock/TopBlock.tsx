import React from 'react';
import InitialSentence from '../InitialSentence/InitialSentence';
import avatar from '../../assets/avatar.png';
import { TopBlockWrapper } from './style';

const TopBlock: React.FC = () => {
  return (
    <TopBlockWrapper>
      <img src={avatar} alt="" />
      <InitialSentence />
    </TopBlockWrapper>
  );
};

export default TopBlock;
