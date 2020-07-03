const getIconLanguage = lang => {
  switch (lang) {
    case 'en':
      return '/img/US.png';
    case 'vi':
    default:
      return '/img/VI.png';
  }
};

export default getIconLanguage;
