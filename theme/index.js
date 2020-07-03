import { createMuiTheme } from '@material-ui/core/styles';

import * as textTheme from './text.theme';
import * as paletteTheme from './palette.theme';

// Create a theme instance.
const theme = createMuiTheme({
  palette: paletteTheme,
  text: textTheme,
});

export default theme;
