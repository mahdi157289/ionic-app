import { TestBed } from '@angular/core/testing'; // Import TestBed, which is used to set up and configure the test environment

import { AuthGuard } from './auth.guard'; // Import the AuthGuard service that we're going to test

describe('AuthGuard', () => {  // Define a test suite for the AuthGuard
  let guard: AuthGuard;  // Declare a variable to hold the instance of AuthGuard

  beforeEach(() => {  // This function runs before each test case to set up the testing environment
    TestBed.configureTestingModule({});  // Initialize TestBed with an empty configuration for now
    guard = TestBed.inject(AuthGuard);  // Inject the AuthGuard instance into the test environment
  });

  it('should be created', () => {  // Define an individual test case that checks if the AuthGuard is created successfully
    expect(guard).toBeTruthy();  // Expect the guard instance to be truthy, i.e., it should exist
  });
});
