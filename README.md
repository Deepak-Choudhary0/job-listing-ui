# Job Listing Ui with Filtering and Pagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

This project is a job listing user interface (UI) built using Angular and the Bulma CSS framework. It allows users to view job listings, apply filters based on job type and job category, and navigate through the listings using pagination. The UI is responsive, making it suitable for various screen sizes and devices.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Task Goal](#task-goal)
- [Task Done](#task-done)
- [API Integration](#api-integration)
- [Task Pending](#task-pending)

## Task Goal

The goal of this project is to build a user-friendly web application that provides a platform for job seekers to find entry-level job opportunities easily. The application should display a list of jobs, and users should be able to filter the jobs based on category and job type. The application should also provide job details, including the position, company name, description, location, and application link. Finally, users should be able to apply for a job by clicking on the "Apply Here" button.

## Task Done

- Created three components: job-list, job-item, and pagination, to implement the different sections of the web application.
- Utilized Angular to build the front-end user interface for the web application.
- Integrated the Bulma CSS framework to style the user interface and make it visually appealing.
- Implemented the job-list component to display a list of entry-level jobs fetched from an external API.
- Enabled filtering of jobs based on category and job type using the filter component.
- Enabled pagination to support browsing through multiple job listings.
- Handled safe HTML rendering for job descriptions to prevent code injection.
- Developed a user-friendly README documentation to guide users on installation, usage, and credits.

## API Integration

The application relies on an external API to fetch job data. Unfortunately, we do not have access to the API documentation. Therefore, some features, such as pagination and multiple category selections, are implemented using client-side logic. In a real-world scenario, these features should be supported by the API to provide better efficiency and scalability.

## Task Pending

- Implement pagination and multiple category selection using the API, once its documentation is available.
- Add error handling for API calls to display appropriate messages in case of API failures.
- Improve the UI/UX design of the web application to enhance user experience.
- Add unit tests to ensure the stability and reliability of the application.

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Make sure you have the following tools installed:

- Node.js (https://nodejs.org)
- Angular CLI (https://angular.io/cli)
- Git (https://git-scm.com/)

### Installation

1. Clone the repository using Git:
   ```
   git clone https://github.com/Deepak-Choudhary0/job-listing-ui.git
   ```

2. Navigate to the project directory:
   ```
   cd job-listing-ui
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Usage

1. Start the development server:
   ```
   ng serve
   ```

2. Open your browser and go to `http://localhost:4200` to view the job listing UI.

## Features

- View job listings with relevant details, including position, apply link, category, location, type, and company name.
- Filter job listings based on a single job type and multiple job categories.
- Display 10 job listings per page, with navigation for pagination.
- Responsive design for optimal viewing on various devices.

## API Endpoints

The following APIs are used to fetch job types, job categories, and job listings:

- `GET https://entryleveljobs.me/api/jobs/type` - Retrieve a list of job types.
- `GET https://entryleveljobs.me/api/jobs/category` - Fetch a list of job categories.
- `GET https://entryleveljobs.me/api/jobs` - Retrieve job listings based on the selected filters and pagination.

Please note that these APIs are not part of this project, and they should be provided externally by the data source.

## Technologies Used

- Angular - JavaScript framework for building the UI.
- Bulma - CSS framework for responsive styling.
- HTML - Structure and layout of the UI.
- CSS - Additional styles and customizations.

## Contributing

Contributions to this project are welcome. Feel free to open issues or pull requests to suggest improvements, report bugs, or add new features.

1. Fork the repository.
2. Create a new branch with a descriptive name for your feature.
3. Commit your changes to the new branch.
4. Push the branch to your forked repository.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for your interest in this job listing UI project. If you have any questions or feedback, please don't hesitate to contact us. Happy coding!
