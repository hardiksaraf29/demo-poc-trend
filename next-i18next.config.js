module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeDetection: false,
  },
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  }

}
