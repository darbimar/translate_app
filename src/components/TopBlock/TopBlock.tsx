import React from 'react';
import avatar from '../../assets/avatar.png';
import InitialStatement from '../InitialStatement/InitialStatement';
import { styled } from 'styled-components';

const TopBlockWrapper = styled.div`
  display: flex;
`;

const TopBlock = () => {
  return (
    <TopBlockWrapper>
      <img src={avatar} alt="" />
      <InitialStatement />
    </TopBlockWrapper>
  );
};

export default TopBlock;
