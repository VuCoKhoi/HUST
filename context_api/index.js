import React, { createContext, useState } from 'react';
import cookie from 'js-cookie';
import { IntlProvider } from 'react-intl';

import lang from '../lang';
import useDevice from '../hook/useDevice';
import useDimensions from '../hook/useDimensions';

/* First we will make a new context */
const RootContext = createContext();

/* Then create a provider Component */
const ContextProvider = ({ initLocale, isMobile, ...props }) => {
  const [locale, setLocale] = useState(initLocale);
  const { matchMobile } = useDevice();
  const [_, { height }] = useDimensions();

  const handleChangeLang = newLocale => {
    cookie.set('locale', newLocale, { expires: 365 });
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={lang[locale] || lang.vi}>
      <RootContext.Provider
        value={{
          // language
          locale,
          handleChangeLang,

          // device
          matchMobile,
          rootHeight: height,
        }}
        {...props}
      />
    </IntlProvider>
  );
};

/* then make a consumer which will surface it */
const CounterConsumer = RootContext.Consumer;

export default ContextProvider;

export { CounterConsumer, RootContext };
