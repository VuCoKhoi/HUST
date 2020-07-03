import { withStyles } from '@material-ui/core/styles';
import Text from './Text';

const Button = withStyles(theme => ({
  root: {
    ...theme.button.default,
    '&:hover': {
      opacity: 0.8,
    },
  },
}))(Text);
export default Button;
