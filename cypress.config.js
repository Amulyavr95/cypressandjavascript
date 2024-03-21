const { defineConfig } = require("cypress");


module.exports = {
  
  e2e: {
    setupNodeEvents(on,config){

    },
    specPattern:'cypress/Integration/Example/*.js' 
  },
  
};
 

