import React from 'react';
import MainPage from './pages/MainPage';
import { useQuery } from '@apollo/client';
import { GET_SENTENCE } from './api/sentense';
import notfound from '../src/assets/notfound.png';
import styled, { keyframes } from 'styled-components';

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

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #383636;
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;

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

  return (
    <AppWrapper>
      <StyledMainPage />
    </AppWrapper>
  );
};

export default App;
