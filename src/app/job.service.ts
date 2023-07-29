import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

const API_BASE_URL = 'https://entryleveljobs.me/api/jobs';
const JOB_TYPES_ENDPOINT = `${API_BASE_URL}/type`;
const JOB_CATEGORIES_ENDPOINT = `${API_BASE_URL}/category`;
const JOBS_ENDPOINT = `${API_BASE_URL}`;

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

export interface Type {
  "typeId": number,
  "name": string
}

export interface Category {
  "categoryId": number,
  "name": string
}

@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }

  getJobTypes(): Observable<Type[]> {
    return this.http.get<any>(JOB_TYPES_ENDPOINT).pipe(
      map((response: any) => response.data)
    );
  }

  getJobCategories(): Observable<Category[]> {
    return this.http.get<any>(JOB_CATEGORIES_ENDPOINT).pipe(
      map((response: any) => response.data)
    );
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<any>(JOBS_ENDPOINT)
      .pipe(
        map((response: any) => response.data)
      );
  }

  getFilteredJobs(type: string, category: string): Observable<Job[]> {
    const url = `${API_BASE_URL}?type=${type}&category=${category}`;
    console.log(url);
    return this.http.get<any>(url).pipe(
      map((response: any) => response.data)
    );
  }

}
