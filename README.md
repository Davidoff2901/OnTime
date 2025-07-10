# OnTime

A full-stack web application for managing and exploring music festival schedules. Built as part of a bachelor's degree thesis.

## Overview

This platform allows **organizers** to create festivals, manage stages, and schedule performances, while **users** can explore upcoming events, purchase tickets, and build their own personalized lineup by favoriting performances and artists.

## Tech Stack

### Frontend
- **Angular 19**
- **Angular Material** – UI components
- **Tailwind CSS** – Utility-first styling

### Backend
- **Node.js + Express** – RESTful API
- **Prisma ORM** – Database access
- **PostgreSQL** – Relational database
- **JWT Authentication** – Secure user login/session

### Architecture
- Follows **MVC + Service Layer** structure
- API consumed by Angular frontend via HTTP requests

##  Features

###  For Organizers
- Create and manage festivals
- Add stages and schedule performances
- Monitor ticket sales

###  For Users
- Explore upcoming festivals
- Favorite performances and build personal lineup
- Purchase tickets securely

###  Other
- Responsive design for mobile and desktop
- Role-based access control (User/Admin/Organizer)
- JWT authentication system

##  Getting Started

### Prerequisites
- Node.js (v18+)
- Angular CLI
- PostgreSQL

### Installation

You need to have Node Package Manager (NPM) installed to follow the following instructions.

````bash
# Install Angular CLI
npm install -g @angular/cli

````

```bash
# Clone the repository
https://github.com/Davidoff2901/OnTime.git

# Navigate to the backend folder
cd Backend

# Install backend dependencies
npm install

# Setup environment variables
cp .env.example .env
# (fill in your DB and JWT credentials)

# Run backend
npm run dev
````

```bash
# Navigate to the frontend folder
cd Frontend

# Install frontend dependencies
npm install

# Run backend
ng serve


