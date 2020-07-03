import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';

import { acceptLanguages } from '../utils/getLocale';
import FlexBox from './FlexBox';
import DropDown from './DropDown';
import getNameLanguage from '../utils/getNameLanguage';
import { RootContext } from '../context_api';
import getIconLanguage from '../utils/getIconLanguage';
import { active } from '../theme/palette.theme';

const useStyles = makeStyles({
  lang: props => ({
    backgroundImage: `url(${getIconLanguage(props.locale)})`,
    margin: '0 10px',
    width: 32,
    height: 16,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
});

function SwitchLang() {
  const { locale, handleChangeLang } = useContext(RootContext);
  const classes = useStyles({ locale });

  return (
    <DropDown
      CompClick={() => <FlexBox className={classes.lang} />}
      items={acceptLanguages.map(cc => ({
        value: getNameLanguage(cc),
        key: cc,
        onClick: () => {
          handleChangeLang(cc);
        },
        style: {
          color: cc === locale && active.A400,
        },
      }))}
    />
  );
}

export default SwitchLang;
