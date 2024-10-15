import { Injectable } from '@angular/core'; // Marks the class as injectable for use as a service
import { CanActivate, Router } from '@angular/router'; // Import CanActivate to control route access, and Router for navigation
import { AuthService } from '../services/auth/auth.service'; // Import AuthService to check if the user is signed in

@Injectable({
  providedIn: 'root',  // Makes the service available throughout the app
})
export class PublicGuard implements CanActivate {  // Implements CanActivate to control route access
  constructor(
    private readonly authService: AuthService,  // Inject AuthService to access user session info
    private readonly router: Router  // Inject Router to allow navigation
  ) { }

  async canActivate(): Promise<boolean> {  // The canActivate method determines if a route can be activated
    const is_signed_in = !!(await this.authService.getSession());  // Get the user's session status

    // If signed in, redirect to the home page
    if (is_signed_in) {
      this.router.navigate(['/home']);  // Navigate to the home page if the user is already signed in
    }

    return !is_signed_in;  // If the user is not signed in, return true to allow access to the public route
  }
}
