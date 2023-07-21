import React from 'react';
import avatar from '../../assets/avatar.png';
import InitialStatement from '../InitialStatement/InitialStatement';

const TopBlock = () => {
  return (
    <div>
      <img src={avatar} alt="" />
      <InitialStatement />
    </div>
  );
};

export default TopBlock;
