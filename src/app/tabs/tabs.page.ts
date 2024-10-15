import { Component } from '@angular/core'; // Importing Component to define the class as an Angular component
import { ActionSheetController } from '@ionic/angular'; // Importing ActionSheetController to display an action sheet

@Component({
  selector: 'app-tabs',  // Selector used to reference the component in templates
  templateUrl: 'tabs.page.html',  // The HTML template associated with this component
  styleUrls: ['tabs.page.scss']  // The styles associated with this component
})
export class TabsPage {  // Define the TabsPage component class

  constructor(
    private actionSheetController: ActionSheetController  // Inject the ActionSheetController to handle the action sheet logic
  ) {}

  // Method to show an action sheet with multiple options
  async selectAction() {
    const actionSheet = await this.actionSheetController.create({  // Create an action sheet
      header: 'Choose an action',  // Set the header of the action sheet
      cssClass: 'custom-action-sheet',  // Apply a custom CSS class
      buttons: [  // Define the buttons that appear in the action sheet
        {
          text: 'Add something',  // Button label
          icon: 'wallet',  // Button icon
          handler: () => {
            // Logic for 'Add something' action
          }
        },
        {
          text: 'Change something',  // Button label
          icon: 'swap-horizontal-outline',  // Button icon
          handler: () => {
            // Logic for 'Change something' action
          }
        },
        {
          text: 'Set something',  // Button label
          icon: 'calculator',  // Button icon
          handler: () => {
            // Logic for 'Set something' action
          }
        },
        {
          text: 'Cancel',  // Button label
          icon: 'close',  // Button icon
          role: 'cancel'  // The cancel button, which dismisses the action sheet
        }
      ]
    });
    await actionSheet.present();  // Display the action sheet
  }
}
