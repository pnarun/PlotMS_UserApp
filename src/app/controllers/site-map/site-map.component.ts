import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';
import { MsgBoxComponent } from '../shared/msg-box/msg-box.component';

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [CommonModule, FormsModule, MsgBoxComponent],
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  projectName: string = '';
  searchQuery: number | null = null;
  maxPlots: number = 0;
  availablePlots: number[] = [];
  isValidInput: boolean = false;
  isBooked: boolean = false;
  showError: boolean = false;
  errorMessage: string = '';
  showMsgBox: boolean = false;
  currentProject?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjects().subscribe(projects => {
        const project = projects.find(p => p.id.toString() === projectId);
        if (project) {
          this.projectName = project.name;
          this.maxPlots = project.availablePlots || 0;
          this.availablePlots = project.availablePlotsArray || [];
          this.currentProject = project;
        }
      });
    }
  }

  validatePlotNumber() {
    if (!this.searchQuery) {
      this.resetValidation();
      return;
    }

    const plotNumber = Number(this.searchQuery);
    
    // First check if the number is within valid range
    if (plotNumber < 1 || plotNumber > this.maxPlots) {
      this.showError = true;
      this.errorMessage = 'Please enter valid plot number between 1 and ' + this.maxPlots;
      this.isValidInput = false;
      return;
    }

    // Check if the plot is available
    if (this.availablePlots.includes(plotNumber)) {
      // Plot is available
      this.isValidInput = true;
      this.showError = false;
      this.errorMessage = '';
    } else {
      // Plot is booked
      this.isValidInput = false;
      this.showError = true;
      this.errorMessage = 'Selected Plot is already booked. Please choose another plot.';
    }
  }

  onSearch() {
    if (this.searchQuery && this.isValidInput) {
      this.showMsgBox = true;
    }
  }

  closeMsgBox() {
    this.showMsgBox = false;
    this.searchQuery = null;
    this.resetValidation();
  }

  private resetValidation() {
    this.isValidInput = false;
    this.isBooked = false;
    this.showError = false;
    this.errorMessage = '';
  }

  goBack() {
    this.location.back();
  }

  handleImageError(event: any) {
    event.target.src = 'assets/images/placeholder.jpg'; // Fallback image
  }
}
