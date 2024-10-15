import { Injectable } from '@angular/core'; // Marks the class as injectable so it can be used as a service
import { CanActivate, Router } from '@angular/router'; // Import CanActivate to define route guard behavior and Router for navigation
import { AuthService } from '../services/auth/auth.service'; // Import AuthService to check user authentication status

@Injectable({
  providedIn: 'root',  // Makes the AuthGuard service available globally within the app
})
export class AuthGuard implements CanActivate {  // Implements the CanActivate interface, which allows it to control route access
  constructor(
    private readonly router: Router,  // Inject Router to navigate to different pages if needed
    private readonly authService: AuthService  // Inject AuthService to get the user's session status
  ) { }

  async canActivate(): Promise<boolean> {  // The canActivate method determines whether the route can be activated
    const is_signed_in = !!(await this.authService.getSession());  // Calls AuthService to check if the user is signed in

    // If not signed in, redirect to the welcome page
    if (!is_signed_in) {
      this.router.navigate(['/welcome']);  // Navigate to the welcome page if the user is not signed in
    }

    return is_signed_in;  // Allow or deny route activation based on the user's sign-in status
  }
}
