import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SENTENCE } from '../api/sentense';
import TopBlock from '../components/TopBlock/TopBlock';
import Button from '../components/Button/Button';
import ConstuctorBlock from '../components/ConstructorBlock/ConstructorBlock';
import styled from 'styled-components';

const Title = styled.h1`
  color: #252525;
  text-shadow: -2px -4px 3px 0px #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const WrongMessage = styled.div`
  color: #f00;
  text-shadow: 1px 2px 2px 0px rgba(91, 13, 13, 0.5);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

export type Word = {
  id: number;
  word: string;
};

export type Section = {
  id: number;
  items: Word[];
};

type StyleProps = {
  className?: string;
};

const MainPage: React.FC<StyleProps> = ({ className }) => {
  const { data } = useQuery(GET_SENTENCE);

  const getOptions = (string: string) => {
    const array = string.split(' ').sort();
    return array.map((item, index = 1) => ({
      id: index++,
      word: item,
    }));
  };

  const initialOptions = getOptions(data.sentence.en);

  const [options, setOptions] = useState(initialOptions);
  const [sections, setSections] = useState<Section[]>([
    { id: 1, items: [] },
    { id: 2, items: options },
  ]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const answer = sections[0].items.map((obj: Word) => obj.word).join(' ');

  const handleCheck = () => {
    if (data.sentence.en === answer) {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setIsCorrect(false);
    }
  };

  return (
    <div className={className}>
      <Title>Translate this sentence</Title>
      <TopBlock />
      <ConstuctorBlock
        options={options}
        setOptions={setOptions}
        sections={sections}
        setSections={setSections}
      />
      {isCorrect && <div>Correct!</div>}
      {isWrong && <WrongMessage>Something wrong!</WrongMessage>}
      <Button handleCheck={handleCheck}>Check</Button>
    </div>
  );
};

export default MainPage;
