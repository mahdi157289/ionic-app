//his test ensures that the app correctly navigates to the homepage and that the welcome message (or page title) is correct.
import { AppPage } from './app.po'; // Import the AppPage class, which provides methods to interact with the app

describe('new App', () => {  // Define a test suite for the app
  let page: AppPage;  // Declare a variable to hold the instance of AppPage

  beforeEach(() => {  // This block runs before each test case, resetting the page state
    page = new AppPage();  // Instantiate the AppPage object to interact with the app's UI
  });

  it('should display welcome message', () => {  // Define the individual test case that checks for the welcome message
    page.navigateTo();  // Navigate to the root page (home page) of the app
    expect(page.getPageTitle()).toContain('Tab 1');  // Check if the page title contains 'Tab 1', ensuring the title or message is displayed
  });
});
