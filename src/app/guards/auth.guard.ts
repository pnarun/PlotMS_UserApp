import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Observable, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private router: Router,
    private projectService: ProjectService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Get the previous URL from the router
    const navigation = this.router.getCurrentNavigation();
    const hasValidNavigation = navigation?.previousNavigation !== null;

    if (!hasValidNavigation) {
      // Direct URL access without proper navigation
      this.router.navigate(['/home']);
      return false;
    }

    // For site-map route, verify if project ID exists
    if (route.routeConfig?.path?.includes('site-map')) {
      const projectId = route.paramMap.get('id');
      if (projectId) {
        return this.projectService.getProjects().pipe(
          map(projects => {
            const projectExists = projects.some(p => p.id.toString() === projectId);
            if (!projectExists) {
              this.router.navigate(['/home']);
              return false;
            }
            return true;
          })
        );
      }
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
} 