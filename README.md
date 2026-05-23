# Local Freelance Job Board Frontend

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

A modern frontend application for a local freelance marketplace that connects Indian students with local businesses for short-term freelance and tech opportunities.

Built with React, Vite, and Tailwind CSS, the platform provides a fast, responsive, and user-friendly experience for students to discover gigs and for businesses to manage freelance hiring workflows.

The application focuses on clean UI/UX, scalable frontend architecture, secure authentication workflows, responsive design, and seamless backend API integration.

---

# Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Live Demo](#live-demo)
- [Deployment](#deployment)
- [Challenges Faced](#challenges-faced)
- [Lessons Learned](#lessons-learned)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

# Overview

Local Freelance Job Board is designed to bridge the gap between students searching for practical freelance opportunities and businesses looking for affordable local talent.

The frontend provides:

- Student dashboards for browsing and applying to gigs
- Business dashboards for posting and managing freelance jobs
- Authentication workflows
- Responsive layouts for mobile and desktop
- Real-time user interaction with backend APIs

The project emphasizes production-ready frontend practices including modular architecture, reusable components, route protection, API abstraction, and scalable state management.

---

# Problem Statement

## The Problem

- Students struggle to find genuine local freelance opportunities
- Local businesses often cannot access affordable technical talent
- Existing freelance platforms focus on large-scale remote work and high commissions
- Most platforms are not optimized for the student-business ecosystem in India

## The Solution

Local Freelance Job Board creates a direct connection between students and businesses through a clean, modern, and localized platform built specifically for short-term freelance opportunities.

---

# Features

## Student Features

- Gig discovery and browsing
- Advanced search and filtering
- One-click applications
- Application status tracking
- Profile management
- Responsive dashboard
- Notification-ready architecture

## Business Features

- Gig posting and editing
- Applicant management
- Candidate review workflow
- Dashboard analytics structure
- Gig lifecycle management
- Hiring workflow system

## Technical Features

- JWT authentication integration
- Protected frontend routes
- Responsive mobile-first design
- Reusable component architecture
- Context API state management
- API abstraction layer
- Environment-based configuration
- Fast build system with Vite
- Clean scalable folder structure

---

# Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| HTTP Client | Axios |
| State Management | Context API |
| Language | JavaScript (ES6+) |
| Notifications | React Hot Toast |
| Icons | React Icons |
| Linting | ESLint |
| Formatting | Prettier |
| Deployment | Vercel |

---

# Architecture


Frontend (React + Vite)
        │
        │ Axios API Requests
        ▼
Backend API (Express.js)
        │
        ▼
MongoDB Database

---

# User Flow

Authentication
    ├── Login
    └── Register

Student Workflow
    ├── Browse Gigs
    ├── Apply
    └── Track Applications

Business Workflow
    ├── Post Gig
    ├── Review Applications
    └── Hire Candidate


# Folder Structure

frontend/
│
├── public/
│   ├── favicon.ico
│   └── assets/
│
├── src/
│   ├── assets/                    # Images, icons, fonts
│   ├── components/                # Reusable UI components
│   │   ├── common/
│   │   ├── student/
│   │   ├── business/
│   │   └── auth/
│   │
│   ├── pages/                     # Route pages
│   ├── hooks/                     # Custom React hooks
│   ├── services/                  # Axios API services
│   ├── context/                   # Global state management
│   ├── styles/                    # Global styles
│   ├── utils/                     # Helper utilities
│   ├── routes/                    # Route guards/protection
│   ├── App.jsx                    # Root component
│   └── main.jsx                   # Application entry point
│
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
├── vercel.json
└── README.md


# Getting Started

## Prerequisites

Before running the project locally, ensure you have:

* Node.js v18+
* npm or yarn
* Git installed

---

## Clone Repository

```bash
git clone https://github.com/rahulreddy006/local-freelance-job-board-frontend.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
VITE_API_BASE_URL=http://localhost:4000/api/v1
VITE_APP_NAME=Local Freelance Job Board
VITE_APP_ENV=development
VITE_ENABLE_DARK_MODE=true
```

---

## Run Development Server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# Environment Variables

| Variable                  | Description               | Example                                                      | Required |
| ------------------------- | ------------------------- | ------------------------------------------------------------ | -------- |
| VITE_API_BASE_URL         | Backend API base URL      | [http://localhost:4000/api/v1](http://localhost:4000/api/v1) | Yes      |
| VITE_JWT_TOKEN_KEY        | JWT token storage key     | freelance_app_token                                          | Yes      |
| VITE_APP_NAME             | Application name          | Local Freelance Job Board                                    | No       |
| VITE_APP_VERSION          | App version               | 1.0.0                                                        | No       |
| VITE_APP_ENV              | Environment               | development                                                  | Yes      |
| VITE_ENABLE_DARK_MODE     | Dark mode feature flag    | true                                                         | No       |
| VITE_ENABLE_NOTIFICATIONS | Notification feature flag | true                                                         | No       |
| VITE_ENABLE_CHAT          | Chat feature flag         | true                                                         | No       |
| VITE_GOOGLE_CLIENT_ID     | Google OAuth client ID    | google-client-id                                             | Optional |

---

# Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| npm run dev     | Start development server         |
| npm run build   | Create production build          |
| npm run preview | Preview production build locally |
| npm run lint    | Run ESLint                       |
| npm run format  | Format code using Prettier       |

---

# Live Demo

Frontend Deployment:

[https://local-freelance-job-board.vercel.app](https://local-freelance-job-board.vercel.app)

Backend API:

[https://local-freelance-backend.onrender.com](https://local-freelance-backend.onrender.com)

---

# Deployment

## Frontend Deployment (Vercel)

### Build Command

```bash
npm run build
```

### Output Directory

```bash
dist
```

### Deployment Features

* Automatic deployments from GitHub
* Preview deployments for pull requests
* CDN optimization
* Environment variable management
* Production-ready hosting

---

# Challenges Faced

## State Management

Managing authentication state, gig data, and application workflows across multiple components required careful architecture planning using Context API and reusable hooks.

## Mobile Responsiveness

Ensuring consistent UI behavior across different screen sizes required a mobile-first responsive design approach using Tailwind CSS utilities.

## API Error Handling

Handling API failures gracefully and providing user-friendly feedback required centralized error management and proper async handling.

## Performance Optimization

Large datasets and repeated re-renders were optimized using lazy loading, pagination, and component-level optimizations.

---

# Lessons Learned

* Component reusability improves long-term maintainability
* API-first development simplifies frontend integration
* Proper folder structure prevents project scaling issues
* Responsive design should be implemented from the beginning
* Clear documentation significantly improves collaboration and onboarding
* Performance optimization matters early in development

---

# Future Improvements

* Real-time notifications
* WebSocket chat system
* Advanced search and filtering
* Payment gateway integration
* AI-powered gig recommendations
* React Native mobile application
* Dark mode expansion
* Multi-language support
* Analytics dashboard
* Skill verification system
* GIS-based gig discovery
* Two-factor authentication

---

# Contributing

Contributions are welcome.

## Contribution Workflow

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit changes

```bash
git commit -m "feat: add new feature"
```

4. Push to GitHub

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

Rahul Reddy

GitHub: [https://github.com/rahulreddy006](https://github.com/rahulreddy006)

---

# Development Notes

This frontend project follows modular React architecture principles with reusable component design, route-level separation, centralized API services, scalable state management, and responsive UI practices.

```
```

