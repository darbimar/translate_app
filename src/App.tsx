import React from 'react';
import MainPage from './pages/MainPage';
import { useQuery } from '@apollo/client';
import { GET_SENTENCE } from './api/sentense';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const StyledMainPage = styled(MainPage)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 482px;
`;

const App: React.FC = () => {
  const { loading, error } = useQuery(GET_SENTENCE);

  if (loading) {
    return <h1>Загрузка</h1>;
  }

  if (error) {
    return <h1>Ошибка</h1>;
  }

  return (
    <AppWrapper>
      <StyledMainPage />
    </AppWrapper>
  );
};

export default App;
