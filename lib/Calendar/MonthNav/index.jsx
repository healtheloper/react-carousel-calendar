import styled from '@emotion/styled';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { COLOR, CONST } from '../../shared/const';
import { useThrottle } from '../../shared/hook';
import { useCalendarDispatch } from '../../CalendarProvider';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 10%;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  :hover {
    background-color: ${COLOR.grey3};
  }
`;

export default function MonthNav() {
  const calendarDispatch = useCalendarDispatch();

  const handleLeftClick = useThrottle(() => {
    calendarDispatch({ type: 'LEFT_ARROW_CLICK' });
  }, CONST.TRANSITION_TIME);
  const handleRightClick = useThrottle(() => {
    calendarDispatch({ type: 'RIGHT_ARROW_CLICK' });
  }, CONST.TRANSITION_TIME);

  return (
    <Wrapper>
      <ArrowWrapper onClick={handleLeftClick}>
        <LeftArrow />
      </ArrowWrapper>
      <ArrowWrapper onClick={handleRightClick}>
        <RightArrow />
      </ArrowWrapper>
    </Wrapper>
  );
}
