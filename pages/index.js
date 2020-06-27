import React from 'react';
import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import useBlockIframe from '../src/customUse/useBlockIframe';
import Text from '../src/components/Text';

const useStyles = makeStyles({
  test: {
    color: 'red',
  },
});

const Home = () => {
  const classes = useStyles();
  useBlockIframe();
  return (
    <div className={classes.test}>
      <Head>
        <title>Home</title>
      </Head>
      <Text>boilerplate - power by khoivc</Text>
      <Text>boilerplate - power by khoivc</Text>
    </div>
  );
};

export default Home;
