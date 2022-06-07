declare module 'react-carousel-calendar' {
  interface CalendarProviderProps {
    lang?: string;
    isPastClickable?: boolean;
    children: React.ReactNode;
  }
  interface CalendarContainerProps {
    width?: number;
    height?: number;
    cssUnit?: string;
    noPadding?: boolean;
    noBoxShadow?: boolean;
    cStyle?: string;
  }

  type Action =
    | { type: 'NEW_CHECK_IN'; checkin: Date }
    | { type: 'CHECK_OUT_HOVER_UPDATE'; checkoutHover: Date }
    | { type: 'CHECK_OUT_HOVER_DELETE' }
    | { type: 'CHECK_OUT_UPDATE'; checkout: Date }
    | { type: 'CHECK_IN_DELETE' }
    | { type: 'CHECK_OUT_DELETE' }
    | { type: 'LEFT_ARROW_CLICK' }
    | { type: 'RIGHT_ARROW_CLICK' }
    | { type: 'CARDS_TRANSITION_END' };

  interface CalendarState {
    lang?: string;
    isPastClickable?: boolean;
    today: Date;
    checkin: Date | string;
    checkout: Date | string;
    checkoutHover: Date | string;
    focusMonth: number;
    translateX: number;
    isTransitioning: boolean;
    isLeft: boolean;
  }

  function Calendar(): JSX.Element;
  function CalendarProvider(props: CalendarProviderProps): JSX.Element;
  function CalendarContainer(props: CalendarContainerProps): JSX.Element;

  function useCalendarState(): CalendarState;
  function useCalendarDispatch(): Dispatch<Action>;
}
