import React, { useState } from 'react';
import { makeStyles, Drawer } from '@material-ui/core';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import FlexBox from '../FlexBox';
import Text from '../Text';
import SwitchLang from '../SwitchLang';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    height: 56,
    top: 0,
    width: '100%',
    margin: '10px auto 0 auto',
    zIndex: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: props => ({
    alignItems: 'center',
    padding: props.isMobile ? '0 10px' : '0 50px',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1136,
  }),
  upload: {
    width: 40,
    height: 40,
    cursor: 'pointer',
  },
  menuItem: props => ({
    padding: '10px 5px',
    margin: '0 5px',
    textDecoration: 'unset',
    borderBottom: props.isMobile && '1px solid rgba(0,0,0,0.2)',
    '&:hover': {
      textDecoration: 'underline',
    },
    cursor: 'pointer',
  }),
  menuIcon: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    '&:hover': {
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  paper: {
    flexDirection: 'column',
    width: '60%',
  },
});

function Header({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);

  const classes = useStyles({ isMobile });

  const listMenu = [
    {
      name: (
        <FormattedMessage id="Header.home.home" defaultMessage="Trang chủ" />
      ),
      key: 'home',
      url: 'http://google.com',
      passHref: true,
    },
    {
      name: 'CV',
      key: 'cv',
      url: '',
    },
    {
      name: (
        <FormattedMessage id="Header.home.contact" defaultMessage="Liên hệ" />
      ),
      key: 'contact',
      url: '',
    },
  ];

  return (
    <FlexBox className={classes.root}>
      <FlexBox className={classes.container}>
        <Link href="/upload">
          <AddAPhotoIcon className={classes.upload} />
        </Link>
        <FlexBox alignItems="center">
          {!isMobile && (
            <FlexBox className={classes.menuContainer}>
              {listMenu.map(
                ({ name, url, passHref, key, ...props }) =>
                  (!passHref && (
                    <Link href={url} key={key}>
                      <Text {...props} className={classes.menuItem}>
                        {name}
                      </Text>
                    </Link>
                  )) || (
                    <Text
                      {...props}
                      key={key}
                      className={classes.menuItem}
                      component="a"
                      href={url}
                    >
                      {name}
                    </Text>
                  ),
              )}
            </FlexBox>
          )}

          <SwitchLang />
          {isMobile && (
            <MenuIcon
              className={classes.menuIcon}
              onClick={() => setOpenMenu(true)}
            />
          )}
          <Drawer
            anchor="left"
            open={isMobile && openMenu}
            onClose={() => setOpenMenu(false)}
            classes={{
              paper: classes.paper,
            }}
          >
            <FlexBox className={classes.logo} />
            {listMenu.map(
              ({ name, url, passHref, key, ...props }) =>
                (!passHref && (
                  <Link href={url} key={key}>
                    <Text {...props} className={classes.menuItem}>
                      {name}
                    </Text>
                  </Link>
                )) || (
                  <Text
                    {...props}
                    key={key}
                    className={classes.menuItem}
                    component="a"
                    href={url}
                  >
                    {name}
                  </Text>
                ),
            )}
          </Drawer>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export default Header;
