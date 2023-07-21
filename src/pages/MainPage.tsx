import React from 'react';
import TopBlock from '../components/TopBlock/TopBlock';
import AnswerBlock from '../components/AnswerBlock/AnswerBlock';
import OptionsBlock from '../components/OptionsBlock/OptionsBlock';
import Button from '../components/Button/Button';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Translate this sentence</h1>
      <TopBlock />
      <AnswerBlock />
      <OptionsBlock />
      <Button />
    </div>
  );
};

export default MainPage;
