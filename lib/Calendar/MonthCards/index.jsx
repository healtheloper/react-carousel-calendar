import styled from '@emotion/styled';

import MonthCard from './MonthCard';
import { COUNTS } from '../../shared/const';
import { useCalendarDispatch, useCalendarState } from '../../CalendarProvider';

const CardsWrapper = styled.div`
  transform: translateX(${({ translateX }) => translateX}%);
  display: flex;
  width: 400%;
  height: 100%;
  ${({ isTransitioning }) => isTransitioning && 'transition: transform 0.2s'}
`;

export default function MonthCards({ onDateClick }) {
  const { today, focusMonth, translateX, isTransitioning } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const curYear = today.getFullYear();
  return (
    <CardsWrapper
      onTransitionEnd={() => {
        calendarDispatch({ type: 'CARDS_TRANSITION_END' });
      }}
      translateX={translateX}
      isTransitioning={isTransitioning}
    >
      {new Array(COUNTS.CARDS).fill(0).map((_, i) => (
        <MonthCard
          key={`${curYear}-${focusMonth + i}`}
          months={new Date(curYear, focusMonth - 1 + i)}
          onDateClick={onDateClick}
        />
      ))}
    </CardsWrapper>
  );
}
