const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout:8000,
  env:{
    url:"https://rahulshettyacademy.com/seleniumPractise/#/"
  },
  projectId: "8yxqt3",
  retries: {
    runMode: 1,//it will execute failed test case one more time
   
    },
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/Integration/Examples/*.feature'
  },
});
 

