import { enableProdMode } from '@angular/core'; // Enables production mode for Angular, optimizing the app's performance
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Platform module for running Angular in the browser

import { AppModule } from './app/app.module'; // Root module of the app
import { environment } from './environments/environment'; // Environment configuration (dev or prod)

if (environment.production) {
  enableProdMode();  // Enables production mode to disable assertions and other checks for better performance
}

platformBrowserDynamic().bootstrapModule(AppModule)  // Bootstraps the root module (AppModule), starting the app
  .catch(err => console.log(err));  // Catches and logs errors that occur during app initialization
