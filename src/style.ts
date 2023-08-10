import MainPage from './pages/MainPage';
import { keyframes, styled } from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const StyledMainPage = styled(MainPage)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 482px;
  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 320px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #383636;
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
