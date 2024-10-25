// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter'); // Import reporter to display Jasmine test results

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,  // Timeout for waiting for any script to finish
  specs: [
    './src/**/*.e2e-spec.ts'  // Path to the test specification files (E2E tests)
  ],
  capabilities: {
    browserName: 'chrome'  // Specify that tests will run in the Chrome browser
  },
  directConnect: true,  // Direct connection to browser without Selenium server
  SELENIUM_PROMISE_MANAGER: false,  // Disables Protractor’s Control Flow (for async/await compatibility)
  baseUrl: 'http://localhost:4200/',  // Base URL for the app under test
  framework: 'jasmine',  // Test framework used (Jasmine in this case)
  jasmineNodeOpts: {
    showColors: true,  // Enables colored output in the test results
    defaultTimeoutInterval: 30000,  // Default timeout for each test case
    print: function() {}  // Override to suppress the default Jasmine spec output
  },
  onPrepare() {
    // Register ts-node to compile TypeScript files
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')  // Path to the TypeScript configuration for the tests
    });
    // Add a custom reporter to display test results in a more readable format
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY  // Show stack traces in a readable format on failures
      }
    }));
  }
};
