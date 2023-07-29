import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { SafeHtml } from '@angular/platform-browser';

// Define the Job interface to describe the structure of job data
export interface Job {
  jobId: number;
  position: string;
  description: SafeHtml;
  link: string;
  location: string; 
  publishDate: number;
  companyName: string;
  category?: {
    categoryId: number;
    name: string;
  };
  type: {
    typeId: number;
    name: string;
  };
  email: string | null;
  companyLogo: string | null;
  live: boolean;
  visaSponsor: boolean;
  localOnly: boolean;
  remote: boolean;
  featured: boolean;
}

export interface Filter {
  category?: string;
  type?: string;
}
export interface Type {
  "typeId": number,
  "name": string
}

export interface Category {
  "categoryId": number,
  "name": string
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobList: Job[] = [];
  typeList: Type[] = [];
  categoryList: Category[] = [];
  selectedCategory: string  = '';
  selectedType: string  = '';

  constructor(private jobService: JobService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (data: Job[]) => {
        this.jobList = data; // Assign the fetched data to jobList
      },
      (error) => {
        console.error('Error fetching job data:', error);
        // Handle the error gracefully, such as displaying an error message to the user
      }
    );
    this.jobService.getJobTypes().subscribe(
      (data: Type[]) => {
        this.typeList = data; // Assign the fetched data to jobList
      },
      (error) => {
        console.error('Error fetching job data:', error);
        // Handle the error gracefully, such as displaying an error message to the user
      }
    );
    this.jobService.getJobCategories().subscribe(
      (data: Category[]) => {
        this.categoryList = data; // Assign the fetched data to jobList
      },
      (error) => {
        console.error('Error fetching job data:', error);
        // Handle the error gracefully, such as displaying an error message to the user
      }
    );
  }

  applyFilter() {
    const filter: Filter = {};
    filter.category = this.selectedCategory;
    filter.type = this.selectedType;
    console.log(filter)
    
    this.jobService.getFilteredJobs(filter.type,filter.category).subscribe(
      (data: Job[]) => {
        this.jobList = data; // Assign the fetched data to jobList
        this.cdr.detectChanges();
        console.log(this.jobList); // Log the first item after data is available
      },
      (error) => {
        console.error('Error fetching job data:', error);
        // Handle the error gracefully, such as displaying an error message to the user
      }
    );
  }
}
