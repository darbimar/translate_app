import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
// import Word from '../Word/Word';
import styled from 'styled-components';
import { GET_SENTENCE } from '../../api/sentense';

const StyledOptionsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Word = styled.div`
  width: 70px;
  height: 30px;
  padding: 4px 0;
  border-radius: 13px;
  border: 1px solid #c9c9c9;
  background: #fff;
  box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  text-align: center;
  cursor: grab;
`;

type Word = {
  id: number;
  order: number;
  word: string;
};

const OptionsBlock = () => {
  const { data, loading } = useQuery(GET_SENTENCE);

  const [wordList, setWordList] = useState([
    { id: 1, order: 1, word: 'How' },
    { id: 2, order: 2, word: 'are' },
    { id: 3, order: 3, word: 'Hello!' },
    { id: 4, order: 4, word: 'you?' },
  ]);

  const [currentWord, setCurrentWord] = useState<Word | null>(null);

  const dragStartHandler = (e: any, item: Word) => {
    setCurrentWord(item);
    console.log('drag', item);
  };
  const dragEndHandler = (e: any) => {
    e.target.style.background = 'white';
  };
  const dragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.background = '#E6E6E6';
  };

  const dropHandler = (e: any, word: Word) => {
    e.preventDefault();
    setWordList(
      wordList.map((item: any) => {
        if (item.id === word.id) {
          return { ...item, order: currentWord?.order };
        }
        if (item.id === currentWord?.id) {
          return { ...item, order: word.order };
        }
        return item;
      }),
    );
    e.target.style.background = 'white';
  };

  const sortWords = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <StyledOptionsBlock>
      {wordList.sort(sortWords).map((item) => (
        <Word
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, item)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, item)}
          key={item.id}>
          {item.word}
        </Word>
      ))}
    </StyledOptionsBlock>
  );
};

export default OptionsBlock;
