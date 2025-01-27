const config = {
  testDir: './tests',
  timeout: 30000,
  expect: {
      timeout: 5000
  },
  reporter: 'html',
  use: {
      baseURL: 'http://localhost:3000',
      trace: 'on-first-retry',
      screenshot: 'only-on-failure'
  },
  projects: [
      {
          name: 'chromium',
          use: {
              browserName: 'chromium',
          },
      }
  ],
  webServer: {
      command: 'node server.js',
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
  },
};

module.exports = config;