import React, { useContext } from 'react';

import Header from '../components/home/Header';
import Sec1 from '../components/home/Sec1';
import withDevice from '../components/withDevice';
import { RootContext } from '../context_api';
import Sec2 from '../components/home/Sec2';

const Home = ({ isMobile }) => {
  const { matchMobile } = useContext(RootContext);
  return (
    <div>
      <Header isMobile={isMobile || matchMobile} />
      <Sec1 isMobile={isMobile || matchMobile} />
      <Sec2 />
    </div>
  );
};

export default withDevice(Home);
