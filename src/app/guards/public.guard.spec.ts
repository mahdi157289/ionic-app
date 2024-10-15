import { TestBed } from '@angular/core/testing'; // Import TestBed for setting up the test environment

import { PublicGuard } from './public.guard'; // Import the PublicGuard service to be tested

describe('PublicGuard', () => {  // Define a test suite for PublicGuard
  let guard: PublicGuard;  // Declare a variable to hold the instance of PublicGuard

  beforeEach(() => {  // Set up the testing environment before each test
    TestBed.configureTestingModule({});  // Initialize the TestBed with no additional configuration
    guard = TestBed.inject(PublicGuard);  // Inject PublicGuard into the test environment
  });

  it('should be created', () => {  // Define a basic test case that checks if PublicGuard is created
    expect(guard).toBeTruthy();  // Assert that the PublicGuard instance is truthy (i.e., it exists)
  });
});
