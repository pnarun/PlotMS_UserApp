import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects: Project[] = [];
  searchQuery: string = '';
  selectedPropertyType: string = '';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        // Projects section is visible
        this.router.navigate([], {
          fragment: 'projects',
          replaceUrl: true
        });
      } else if (rect.top > 100) {
        // Above projects section
        this.router.navigate([], {
          fragment: undefined,
          replaceUrl: true
        });
      }
    }
  }

  ngOnInit(): void {
    this.loadProjects();
    
    // Check if we should scroll to projects
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'projects') {
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    });
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      }
    );
  }

  onSearch(): void {
    // Implement search functionality
    this.projectService.searchProjects(this.searchQuery, this.selectedPropertyType).subscribe(
      (data) => {
        this.projects = data;
      }
    );
  }
}
