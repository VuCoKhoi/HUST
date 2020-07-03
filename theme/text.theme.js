import * as themePalette from './palette.theme';

export const auto = {
  fontFamily: `'Roboto', sans-serif`,
  fontSize: '1em',
  color: themePalette.black[900],
  whiteSpace: 'pre-wrap',
};
export const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
  maxWidth: '100%',
};
