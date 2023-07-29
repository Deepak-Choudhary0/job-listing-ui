import { SafeCall } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

interface Job {
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

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})

export class JobItemComponent {
  @Input() job!: Job;
}
