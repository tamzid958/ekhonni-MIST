const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern=[
        "cypress/e2e/PostProduct.cy.js",
        "cypress/e2e/Admin.cy.js",
        "cypress/e2e/ProductBid.cy.js",
        "cypress/e2e/BidAccept.cy.js"
      ]
      return config
    },
  },
});
