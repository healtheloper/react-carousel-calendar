import styled from '@emotion/styled';

import CardBody from './CardBody';
import CardTitle from './CardTitle';
import { WIDTHS, COUNTS } from '../../../shared/const';

const CardWrapper = styled.div`
  width: ${WIDTHS.MONTH_CARD.PERCENT}%;
  margin: 0 ${WIDTHS.MONTH_CARD.MARGIN_X / COUNTS.CARD}%;
  display: grid;
  grid-template-rows: 2rem 1fr;
`;

export default function MonthCard({ months, onDateClick }) {
  return (
    <CardWrapper>
      <CardTitle months={months} />
      <CardBody months={months} onDateClick={onDateClick} />
    </CardWrapper>
  );
}
