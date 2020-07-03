import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../FlexBox';
import Text from '../Text';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    backgroundImage: 'url(/img/sec1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: props => ({
    width: '100%',
    maxWidth: 1136,
    minHeight: props.isMobile ? 300 : 500,
    padding: props.isMobile ? '0 10px' : '0 50px',
  }),
  title: props => ({
    textAlign: 'right',
    fontSize: props.isMobile ? 24 : 36,
    maxWidth: props.isMobile ? '60%' : 600,
    position: 'absolute',
    top: '30%',
    right: '10%',
    color: 'white',
  }),
});

function Sec1({ isMobile }) {
  const classes = useStyles({ isMobile });
  return (
    <FlexBox className={classes.root}>
      <FlexBox className={classes.container}>
        <Text className={classes.title} component="h1">
          <FormattedMessage
            id="Sec1.home.title"
            defaultMessage="CHÀO MỪNG BẠN ĐẾN VỚI BỘ SƯU TẬP ẢNH CỦA...."
          />
        </Text>
      </FlexBox>
    </FlexBox>
  );
}

export default Sec1;
