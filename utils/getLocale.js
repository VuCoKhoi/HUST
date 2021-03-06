import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export const acceptLanguages = ['vi', 'en'];

const defaultLocale = acceptLanguages[0];

const getLocale = async ctx => {
  try {
    const cookieLocale = nextCookie(ctx).locale;
    let locale = defaultLocale;
    if (cookieLocale) {
      // check if user has set locale
      locale = acceptLanguages.includes(cookieLocale)
        ? cookieLocale
        : defaultLocale;
    } else {
      // check if user has set locale
      const systemLocale =
        (ctx.req && ctx.req.headers['accept-language']) ||
        navigator.language ||
        defaultLocale;
      locale = acceptLanguages.includes(systemLocale)
        ? systemLocale
        : defaultLocale;
      cookie.set('locale', locale, { expires: 365 });
    }
    return locale;
  } catch (error) {
    console.error(error);
    return defaultLocale;
  }
};

export default getLocale;
