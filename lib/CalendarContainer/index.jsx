import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
  min-width: 400px;
  min-height: 240px;
  ${({ noPadding }) => !noPadding && `padding: 3rem;`}
  width: ${({ width, cssUnit }) => width + cssUnit};
  height: ${({ height, cssUnit }) => height + cssUnit};
  ${({ noBoxShadow }) =>
    !noBoxShadow &&
    `box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05)`};
  ${({ cStyle }) => cStyle}
`;

export default function CalendarContainer({
  children,
  width = null,
  height = null,
  cssUnit = 'rem',
  noPadding = false,
  noBoxShadow = false,
  cStyle = null,
}) {
  const cWidth = width || 50;
  const cHeight = height || (cWidth * 3) / 5;
  return (
    <ContainerWrapper
      width={cWidth}
      height={cHeight}
      cssUnit={cssUnit}
      noPadding={noPadding}
      noBoxShadow={noBoxShadow}
      cStyle={cStyle}
    >
      {children}
    </ContainerWrapper>
  );
}
