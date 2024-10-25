//This file implements a Page Object Model (POM), which is a design pattern for E2E tests  more readable and maintainable by hiding the implementation details, such as element selection and browser navigation.
import { browser, by, element } from 'protractor'; // Import Protractor utilities to interact with the browser and elements

export class AppPage {  // Define a Page Object Model class to encapsulate the app's UI interactions
  
  navigateTo() {  // Method to navigate to the root URL of the app
    return browser.get('/');  // Load the root URL (home page)
  }

  getPageTitle() {  // Method to get the text of the page's title element
    return element(by.css('ion-title')).getText();  // Find the ion-title element and return its text
  }
}
