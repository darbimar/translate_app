import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SENTENCE } from './api/sentense';
import notfound from '../src/assets/notfound.png';
import { AppWrapper, Spinner, StyledMainPage } from './style';

const App: React.FC = () => {
  const { loading, error } = useQuery(GET_SENTENCE);

  if (loading) {
    return (
      <AppWrapper>
        <Spinner></Spinner>
      </AppWrapper>
    );
  }

  if (error) {
    return (
      <AppWrapper>
        <img src={notfound} alt="" />
      </AppWrapper>
    );
  }

  function fetchData(data: unknown) {
    if (typeof data === 'string') {
      console.log(data.toLowerCase());
    }
  }

  fetchData(4);

  return (
    <AppWrapper>
      <StyledMainPage />
    </AppWrapper>
  );
};

export default App;
