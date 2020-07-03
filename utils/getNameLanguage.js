const getNameLanguage = lang => {
  switch (lang) {
    case 'en':
      return 'English';
    case 'vi':
    default:
      return 'Tiếng Việt';
  }
};

export default getNameLanguage;
