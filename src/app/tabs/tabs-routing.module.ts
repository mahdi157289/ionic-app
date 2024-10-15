import { NgModule } from '@angular/core'; // Importing NgModule, a decorator that defines an Angular module
import { RouterModule, Routes } from '@angular/router'; // Importing RouterModule for routing and Routes for defining route configurations
import { TabsPage } from './tabs.page'; // Importing the TabsPage component that will serve as the main parent component

const routes: Routes = [  // Define an array of routes
  {
    path: '',  // The default path ('' means root for this module)
    component: TabsPage,  // The component associated with this path (TabsPage will be the base for child routes)
    children: [  // Define child routes that will be displayed within the TabsPage
      {
        path: 'home',  // A route for the "home" tab
        loadChildren: () => import('../pages/secure/home/home.module').then(m => m.HomePageModule)  // Lazy loads the HomePageModule
      },
      {
        path: '',  // Default child route, redirects to 'home'
        redirectTo: 'home',
        pathMatch: 'full'  // Ensures full URL match for redirect
      },
      {
        path: 'charts',  // A route for the "charts" tab
        loadChildren: () => import('../pages/secure/charts/charts.module').then(m => m.ChartsPageModule)  // Lazy loads the ChartsPageModule
      },
      {
        path: 'payments',  // A route for the "payments" tab
        loadChildren: () => import('../pages/secure/payments/payments.module').then(m => m.PaymentsPageModule)  // Lazy loads the PaymentsPageModule
      },
      {
        path: 'styleguide',  // A route for the "styleguide" tab
        loadChildren: () => import('../pages/secure/styleguide/styleguide.module').then(m => m.StyleguidePageModule)  // Lazy loads the StyleguidePageModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Imports RouterModule configured with the routes for the TabsPage
  exports: [RouterModule]  // Exports RouterModule to make the routes available to other modules
})
export class TabsPageRoutingModule {}  // Define the TabsPageRoutingModule
