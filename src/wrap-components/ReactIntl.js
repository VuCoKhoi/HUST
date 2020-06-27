import React from 'react';

import { IntlProvider } from 'react-intl';
import languagePack from '../lang';

function ReactIntl() {
  return <IntlProvider locale="vi" messages={languagePack.vi} />;
}

export default ReactIntl;
