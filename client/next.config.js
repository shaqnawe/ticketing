module.exports = {
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  devIndicators: {
    allowedDevOrigins: ['ticketing.dev'],
  },
};
