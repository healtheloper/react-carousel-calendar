import { createContext, useContext, useReducer } from 'react';

import { WIDTHS } from '../shared/const';

const initTranslateX = -WIDTHS.MONTH_CARDS.PERCENT;
const today = new Date();

export const ACTION_TYPES = {
  CHECK_IN_DELETE: 'CHECK_IN_DELETE',
  CHECK_OUT_DELETE: 'CHECK_OUT_DELETE',
};

function reducer(state, action) {
  switch (action.type) {
    case 'NEW_CHECK_IN':
      return {
        ...state,
        checkin: action.checkin,
        checkout: '',
      };
    case 'CHECK_OUT_HOVER_UPDATE': {
      return {
        ...state,
        checkoutHover: action.checkoutHover,
      };
    }
    case 'CHECK_OUT_HOVER_DELETE':
      return {
        ...state,
        checkoutHover: '',
      };
    case 'CHECK_OUT_UPDATE':
      return {
        ...state,
        checkout: action.checkout,
      };
    case 'CHECK_IN_DELETE':
      return {
        ...state,
        checkin: '',
        checkout: '',
      };
    case 'CHECK_OUT_DELETE':
      return {
        ...state,
        checkout: '',
      };
    case 'LEFT_ARROW_CLICK':
      return {
        ...state,
        isLeft: true,
        isTransitioning: true,
        translateX: state.translateX - WIDTHS.MONTH_CARDS.PERCENT * -1,
      };
    case 'RIGHT_ARROW_CLICK':
      return {
        ...state,
        isLeft: false,
        isTransitioning: true,
        translateX: state.translateX - WIDTHS.MONTH_CARDS.PERCENT,
      };
    case 'CARDS_TRANSITION_END':
      return {
        ...state,
        focusMonth: state.focusMonth + (state.isLeft ? -1 : 1),
        isTransitioning: false,
        translateX: initTranslateX,
      };
    default:
      throw new Error('Unexpected action');
  }
}

const CalendarStateContext = createContext(null);
const CalendarDispatchContext = createContext(null);

export default function CalendarProvider({
  children,
  lang = null,
  isPastClickable = false,
}) {
  const initState = {
    lang,
    isPastClickable,
    today,
    checkin: '',
    checkout: '',
    checkoutHover: '',
    focusMonth: today.getMonth(),
    translateX: initTranslateX,
    isTransitioning: false,
    isLeft: false,
  };

  const [calendarState, calendarDispatch] = useReducer(reducer, initState);

  return (
    <CalendarStateContext.Provider value={calendarState}>
      <CalendarDispatchContext.Provider value={calendarDispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

export function useCalendarState() {
  const calendarState = useContext(CalendarStateContext);
  if (!calendarState) throw Error('CalendarState not found');
  return calendarState;
}

export function useCalendarDispatch() {
  const calendarDispatch = useContext(CalendarDispatchContext);
  if (!calendarDispatch) throw Error('CalendarDispatch not found');
  return calendarDispatch;
}
