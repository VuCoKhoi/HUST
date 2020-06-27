import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const Text = withStyles(theme => ({
  root: {
    ...theme.text.default,
  },
}))(Box);
export default Text;
