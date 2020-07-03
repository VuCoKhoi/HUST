const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  // target: 'serverless',
  // deploy to github page
  // assetPrefix:
  //   process.env.NODE_ENV === 'production' ? '/my-boilerplate-next-app/' : '',

  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty',
    };
    return config;
  },
});
