const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "6ao2cq",
  e2e: {
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
