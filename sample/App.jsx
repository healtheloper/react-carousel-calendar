import { Calendar, CalendarContainer, CalendarProvider } from '../dist';
import {
  useCalendarState,
  useCalendarDispatch,
  ACTION_TYPES,
} from '../dist/CalendarProvider';

function SampleCheckin() {
  const { checkin } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const handleClickButton = () => {
    const type = ACTION_TYPES.CHECK_IN_DELETE;
    calendarDispatch({ type });
  };

  return (
    <div>
      <span>Check In : {checkin.toString()}</span>
      {checkin && <button onClick={handleClickButton}>delete</button>}
    </div>
  );
}

function SampleCheckOut() {
  const { checkout } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const handleClickButton = () => {
    const type = ACTION_TYPES.CHECK_OUT_DELETE;
    calendarDispatch({ type });
  };

  return (
    <div>
      <span>Check Out : {checkout.toString()}</span>
      {checkout && <button onClick={handleClickButton}>delete</button>}
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <h1>Hello Calendar</h1>
      <CalendarProvider>
        <SampleCheckin />
        <SampleCheckOut />
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </CalendarProvider>
    </div>
  );
}

export default App;
