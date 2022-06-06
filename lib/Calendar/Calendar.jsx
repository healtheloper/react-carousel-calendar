import styled from '@emotion/styled';

import MonthCards from './MonthCards';
import MonthNav from './MonthNav';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MonthCardsWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

export default function Calendar({ onDateClick = () => {} }) {
  return (
    <Wrapper>
      <MonthNav />
      <MonthCardsWrapper>
        <MonthCards onDateClick={onDateClick} />
      </MonthCardsWrapper>
    </Wrapper>
  );
}
