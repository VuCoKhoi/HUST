import { createMuiTheme } from '@material-ui/core/styles';

import textTheme from './text.theme';
import paletteTheme from './palette.theme';

// Create a theme instance.
const theme = createMuiTheme({
  palette: paletteTheme,
  text: textTheme,
});

export default theme;
