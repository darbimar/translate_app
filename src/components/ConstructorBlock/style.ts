import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  height: 100px;
  padding: 12px 0;
  border-top: 2px #4b4b4b51 solid;
  @media (max-width: 500px) {
    height: 150px;
  }
`;

export const StyledWord = styled(motion.div)`
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
