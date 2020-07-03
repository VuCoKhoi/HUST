import React, { useState } from 'react';
import { makeStyles, Popover, Box } from '@material-ui/core';
import FlexBox from './FlexBox';
import Text from './Text';

const useStyles = makeStyles({
  items: props => ({
    minWidth: 100,
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 10px',
    height: 40,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    ...props.style,
  }),
  clickContainter: {
    cursor: 'pointer',
  },
});

function DropDown({ CompClick, items, style, closeAfClick = true }) {
  const [anchor, setAnchor] = useState(false);
  const classes = useStyles({ style });

  return (
    <FlexBox className={classes.root}>
      <Box
        onClick={e => setAnchor(e.currentTarget)}
        className={classes.clickContainter}
      >
        <CompClick />
      </Box>

      {anchor && (
        <Popover
          open={!!anchor}
          anchorEl={anchor || <div />}
          onClose={() => setAnchor(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {items.map(cc => (
            <FlexBox
              className={classes.items}
              key={cc.key || Math.random()}
              onClick={() => {
                if (cc.onClick) {
                  cc.onClick();
                }
                if (closeAfClick) {
                  setAnchor(false);
                }
              }}
            >
              <Text style={{ ...cc.style }}>{cc.value}</Text>
            </FlexBox>
          ))}
        </Popover>
      )}
    </FlexBox>
  );
}

export default DropDown;
