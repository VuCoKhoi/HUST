import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const FlexBox = withStyles({
  root: {
    display: 'flex',
    position: 'relative',
  },
})(Box);
export default FlexBox;
