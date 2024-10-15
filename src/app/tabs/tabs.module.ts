import { CommonModule } from '@angular/common'; // Importing CommonModule for Angular directives
import { NgModule } from '@angular/core'; // Importing NgModule for defining an Angular module
import { FormsModule } from '@angular/forms'; // Importing FormsModule for template-driven forms
import { IonicModule } from '@ionic/angular'; // Importing IonicModule to use Ionic components

import { TabsPageRoutingModule } from './tabs-routing.module'; // Importing the routing module for TabsPage

import { TabsPage } from './tabs.page'; // Importing the TabsPage component

@NgModule({
  imports: [
    IonicModule,  // Provides Ionic components and services
    CommonModule,  // Provides Angular directives such as ngIf and ngFor
    FormsModule,  // Enables template-driven forms
    TabsPageRoutingModule  // Import the routing module to configure routes for TabsPage
  ],
  declarations: [TabsPage]  // Declare the TabsPage component
})
export class TabsPageModule {}  // Export the module to be used in the app
