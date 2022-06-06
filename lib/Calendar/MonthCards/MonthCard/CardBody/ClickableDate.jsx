import styled from '@emotion/styled';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../../../CalendarProvider';

import { COLOR } from '../../../../shared/const';

const BodyElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.grey1};
  cursor: pointer;
  width: 100%;
  height: 100%;
  ${({ isDateBetweenInOut }) =>
    isDateBetweenInOut &&
    `
    background-color: ${COLOR.grey4};
  `}
  ${({ isCheckOutDate }) =>
    isCheckOutDate &&
    'border-top-right-radius: 50%; border-bottom-right-radius:50%;'}
  ${({ isCheckInDate }) =>
    isCheckInDate &&
    'border-top-left-radius: 50%; border-bottom-left-radius:50%;'}
`;

const CircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  :hover {
    background-color: ${COLOR.grey1};
    color: ${COLOR.white};
    border-radius: 50%;
  }
  ${({ isSelectedDate }) =>
    isSelectedDate &&
    `
    background-color: ${COLOR.grey1};
    color: ${COLOR.white};
    border-radius: 50%;
  `}
`;

export default function ClickableDate({
  year,
  month,
  date,
  isCheckInDate,
  isCheckOutDate,
  isDateBetweenInOut,
  onDateClick,
}) {
  const { checkin, checkout } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const isSelectedData = isCheckInDate || isCheckOutDate;
  const myDate = new Date(year, month, date);

  const handleClickDate = (...args) => {
    /**
     * NEW CHECK IN
     * 1. CHECK IN 이 없는 경우
     * 2. CHECK IN 이 있지만 현재 CHECK IN 보다 앞 날짜를 고르는 경우
     */
    const newCheckInCondOne = checkin === '';
    const newCheckInCondTwo =
      checkin !== '' && checkin.getTime() > myDate.getTime();
    /**
     * CHECK OUT UPDATE
     * 1. CHECK IN 이 있고, 다음 선택되는 날짜가 CHECK IN 보다 뒤이거나 같은 경우
     */
    const checkOutUpdateCond =
      checkin !== '' && checkin.getTime() <= myDate.getTime();

    if (newCheckInCondOne || newCheckInCondTwo) {
      calendarDispatch({ type: 'NEW_CHECK_IN', checkin: myDate });
    } else if (checkOutUpdateCond) {
      calendarDispatch({ type: 'CHECK_OUT_UPDATE', checkout: myDate });
    }
    if (onDateClick) {
      onDateClick(...args);
    }
  };

  const handleMouseEnterDate = () => {
    // 1. Checkin 이 선택되지 않았다면
    if (checkin === '') return;
    // 2. Checkin 과 Checkout 모두 선택되었다면
    if (checkin !== '' && checkout !== '') return;

    calendarDispatch({
      type: 'CHECK_OUT_HOVER_UPDATE',
      checkoutHover: myDate,
    });
  };

  const handleMouseLeaveDate = () => {
    calendarDispatch({
      type: 'CHECK_OUT_HOVER_DELETE',
    });
  };
  return (
    <BodyElement
      onClick={handleClickDate}
      onMouseEnter={handleMouseEnterDate}
      onMouseLeave={handleMouseLeaveDate}
      isCheckInDate={isCheckInDate}
      isCheckOutDate={isCheckOutDate}
      isDateBetweenInOut={isDateBetweenInOut}
    >
      <CircleBox isSelectedDate={isSelectedData}>
        <span>{date}</span>
      </CircleBox>
    </BodyElement>
  );
}
