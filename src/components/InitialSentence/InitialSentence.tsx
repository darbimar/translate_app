import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_SENTENCE } from '../../api/sentense';
import { styled } from 'styled-components';

const SentenceWrapper = styled.div`
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 17px;
  left: 47px;
  width: 230px;
  font-size: 18px;
  line-height: normal;
  text-align: justify;
`;

const InitialSentence: React.FC = () => {
  const { data } = useQuery(GET_SENTENCE);

  return (
    <SentenceWrapper>
      <svg
        width="307"
        height="92"
        viewBox="0 0 307 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.9254 63.2936L1.73257 81.2645C1.09664 81.8926 1.54146 82.9759 2.43533 82.9759H19.8214C20.043 82.9759 20.2226 83.1555 20.2226 83.3771C20.2226 87.5871 23.6355 91 27.8455 91H287C297.493 91 306 82.4934 306 72V20C306 9.50659 297.493 1 287 1H39.2226C28.7292 1 20.2226 9.50659 20.2226 20V62.5822C20.2226 62.8495 20.1156 63.1057 19.9254 63.2936Z"
          stroke="#252525"
          strokeWidth="2"
        />
      </svg>
      <Text>{data.sentence.ru}</Text>
    </SentenceWrapper>
  );
};

export default InitialSentence;
