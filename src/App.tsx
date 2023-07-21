import React from 'react';
import MainPage from './pages/MainPage';
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

function App() {
  return (
    <AppWrapper>
      <StyledMainPage />
    </AppWrapper>
  );
}

export default App;
