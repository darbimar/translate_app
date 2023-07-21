import React from 'react';
import TopBlock from '../components/TopBlock/TopBlock';
import AnswerBlock from '../components/AnswerBlock/AnswerBlock';
import OptionsBlock from '../components/OptionsBlock/OptionsBlock';
import Button from '../components/Button/Button';
import styled from 'styled-components';

type StyleProps = {
  className?: string;
};

const Title = styled.h1`
  color: #252525;
  text-shadow: -2px -4px 3px 0px #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MainPage: React.FC<StyleProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title>Translate this sentence</Title>
      <TopBlock />
      <AnswerBlock />
      <OptionsBlock />
      <Button />
    </div>
  );
};

export default MainPage;
