// Required by karma.conf.js to load all .spec and framework files recursively

import { getTestBed } from '@angular/core/testing'; // Sets up the testing environment for Angular
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing'; // Imports for running browser-based tests
import 'zone.js/dist/zone-testing'; // Required for testing in Angular

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);  // Search for all .spec.ts test files in the project
// Load the test modules.
context.keys().map(context);  // Load and run the test modules
