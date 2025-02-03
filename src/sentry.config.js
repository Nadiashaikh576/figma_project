const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
    // your existing next.js config here
};

const SentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(
  moduleExports,
  SentryWebpackPluginOptions
);
