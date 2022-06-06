import styled from '@emotion/styled';
import { useCalendarState } from '../../../CalendarProvider';
import { getDateFormat } from '../../../shared/util';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;

export default function CardTitle({ months }) {
  const { lang } = useCalendarState();

  return (
    <TitleWrapper>
      <h5>{getDateFormat(months, lang)}</h5>
    </TitleWrapper>
  );
}
