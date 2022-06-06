const arrowStyle = {
  height: '10px',
  width: '10px',
  display: 'block',
  fill: 'currentcolor',
};

export default function RightArrow() {
  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={arrowStyle}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
}
