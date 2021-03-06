module.exports = function (config) {
  'use strict';

  require('./shared.karma.conf')(config);

  const customLaunchers = {
    bs_windows_edge: {
      base: 'BrowserStack',
      browser: 'edge',
      os: 'Windows',
      os_version: '10'
    },
    bs_windows_chrome_latest: {
      base: 'BrowserStack',
      browser: 'chrome',
      os: 'Windows',
      os_version: '8.1'
    },
    bs_windows_firefox_latest: {
      base: 'BrowserStack',
      browser: 'firefox',
      os: 'Windows',
      os_version: '8.1'
    },
    bs_osx_safari_latest: {
      base: 'BrowserStack',
      browser: 'safari',
      os: 'OS X',
      os_version: 'Sierra'
    },
    bs_osx_chrome_latest: {
      base: 'BrowserStack',
      browser: 'chrome',
      os: 'OS X',
      os_version: 'Sierra'
    },
    bs_osx_firefox_latest: {
      base: 'BrowserStack',
      browser: 'firefox',
      os: 'OS X',
      os_version: 'Sierra'
    }
  };

  config.set({
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    browserStack: {
      port: 9876,
      pollingTimeout: 10000
    }
  });
};
