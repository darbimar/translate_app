import React from 'react';
import InitialSentence from '../InitialSentence/InitialSentence';
import avatar from '../../assets/avatar.png';
import { Image, TopBlockWrapper } from './style';

const TopBlock: React.FC = () => {
  return (
    <TopBlockWrapper>
      <Image src={avatar} alt="" />
      <InitialSentence />
    </TopBlockWrapper>
  );
};

export default TopBlock;
