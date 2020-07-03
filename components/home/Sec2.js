import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../FlexBox';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    backgroundImage: 'url(/img/sec2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  container: props => ({
    width: '100%',
    maxWidth: 1136,
    minHeight: 900,
    padding: props.isMobile ? '0 10px' : '0 50px',
  }),
});

function Sec2({ isMobile }) {
  const classes = useStyles({ isMobile });
  return (
    <FlexBox className={classes.root}>
      <FlexBox className={classes.container}>aaaa</FlexBox>
    </FlexBox>
  );
}

export default Sec2;
