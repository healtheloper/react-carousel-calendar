const PARENT_PERCENT = 4;
const CARD_COUNT_PER_BOX = 2;
const CARDS_COUNT = CARD_COUNT_PER_BOX + 2; // for carousel
const MARGIN_X = 2;

const WIDTH_CARDS = 100 / PARENT_PERCENT / CARD_COUNT_PER_BOX;
const WIDTH_PER_CARD =
  (100 / PARENT_PERCENT / CARDS_COUNT) * CARD_COUNT_PER_BOX;

const WIDTH_EXCEPT_MARGIN = WIDTH_PER_CARD - MARGIN_X;

const TRANSITION_TIME = 200; // carousel transition time (ms)

export const CONST = {
  TRANSITION_TIME,
};

export const COUNTS = {
  CARDS: CARDS_COUNT,
  CARD: CARD_COUNT_PER_BOX,
};

export const WIDTHS = {
  MONTH_CARDS: {
    PERCENT: WIDTH_CARDS,
  },
  MONTH_CARD: {
    MARGIN_X,
    PERCENT: WIDTH_EXCEPT_MARGIN,
  },
};

export const COLOR = {
  white: '#fff',
  grey1: '#333',
  grey2: '#828282',
  grey3: '#BDBDBD',
  grey4: '#F5F5F7',
};
