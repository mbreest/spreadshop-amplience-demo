require('dotenv').config();

module.exports = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '//',
        destination: '/',
        permanent: true,
      },
    ];
  },
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
    CF_PREVIEW_ACCESS_TOKEN: process.env.CF_PREVIEW_ACCESS_TOKEN,
    SPRD_API_KEY: process.env.SPRD_API_KEY,
    SPRD_SHOP_ID: '100229382',
    SPRD_API_BASE: 'https://api.spreadshirt.net',
    SPRD_IMAGE_BASE: 'https://image.spreadshirtmedia.net',
  },
};
