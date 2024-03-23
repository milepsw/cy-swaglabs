const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: 'cypress/test-data',
  downloadsFolder: 'cypress/downloads',
  screenshotsFolder: 'cypress/result-log/screenshots',
  videosFolder: 'cypress/result-log/videos',
  e2e: {
    supportFile: 'cypress/support/imports.{js,jsx,ts,tsx}',
    specPattern: 'cypress/testcases/**/*.cy.{js,jsx,ts,tsx}'
  },
});