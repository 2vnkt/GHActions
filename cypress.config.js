const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4urwvt",
  CYPRESS_RECORD_KEY:"a389ed13-2c1f-4f6c-81de-d39b04f1dd57",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
