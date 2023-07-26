import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SENTENCE } from '../api/sentense';
import { useSpeechSynthesis } from 'react-speech-kit';
import TopBlock from '../components/TopBlock/TopBlock';
import Button from '../components/Button/Button';
import ConstuctorBlock from '../components/ConstructorBlock/ConstructorBlock';
import { Section, Word } from '../types/types';
import { CorrectMessage, Title, WrongMessage } from './style';

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

  const { speak } = useSpeechSynthesis();

  const handleCheck = () => {
    if (data.sentence.en === answer) {
      setIsCorrect(true);
      setIsWrong(false);
      speak({ text: answer });
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
      {isCorrect && <CorrectMessage>Correct!</CorrectMessage>}
      {isWrong && <WrongMessage>Something wrong!</WrongMessage>}
      <Button handleCheck={handleCheck}>Check</Button>
    </div>
  );
};

export default MainPage;
