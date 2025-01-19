import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private mockProjects: Project[] = [
    {
      id: 1,
      name: 'N R Layout',
      location: 'Siddashinvanagar',
      imageUrl: 'assets/images/projects/nr-layout.jpg',
      propertyType: 'residential',
      description: 'Premium residential plots'
    },
    {
      id: 2,
      name: 'Balaji Layout',
      location: 'Saraswathipuram',
      imageUrl: 'assets/images/projects/balaji-layout.jpg',
      propertyType: 'residential',
      description: 'Luxury residential plots'
    },
    {
      id: 3,
      name: 'SLN Layout',
      location: 'Antharasanahalli',
      imageUrl: 'assets/images/projects/sln-layout.jpg',
      propertyType: 'residential',
      description: 'Premium residential plots'
    },
    {
      id: 4,
      name: 'TVS Layout',
      location: 'Kyathasandra',
      imageUrl: 'assets/images/projects/tvs-layout.jpg',
      propertyType: 'residential',
      description: 'Premium residential plots'
    },
    {
      id: 5,
      name: 'Dollars Colony',
      location: 'Batawadi',
      imageUrl: 'assets/images/projects/dollars-colony.jpg',
      propertyType: 'residential',
      description: 'Premium residential plots'
    },
    {
      id: 6,
      name: 'TUDA Layout',
      location: 'Sira Gate',
      imageUrl: 'assets/images/projects/tuda-layout.jpg',
      propertyType: 'residential',
      description: 'Premium residential plots'
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  searchProjects(query: string, propertyType: string): Observable<Project[]> {
    let filteredProjects = this.mockProjects;
    
    if (query) {
      query = query.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.name.toLowerCase().includes(query) || 
        project.location.toLowerCase().includes(query)
      );
    }

    if (propertyType) {
      filteredProjects = filteredProjects.filter(project => 
        project.propertyType === propertyType
      );
    }

    return of(filteredProjects);
  }
} 