import themePalette from './palette.theme';

export default {
  default: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '1em',
    color: themePalette.black[900],
    whiteSpace: 'pre-wrap',
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    maxWidth: '100%',
  },
};
