User List App – NestJS + React
A simple full-stack application that displays and manages a list of users. Built with NestJS (backend) and React (frontend). Ideal for learning full-stack CRUD operations with hardcoded data.

Features
View users (ID, Name, Email)

Edit user name/email in-place

Delete user with confirmation

React useState for state handling

Axios for API requests

REST API via NestJS Controller

Tech Stack
Frontend: React, Axios, JavaScript

Backend: NestJS, TypeScript

Tools: Node.js, npm, Jest

Getting Started
Prerequisites
Node.js v16+

npm

Backend Setup (NestJS)
bash
Copy
Edit
npm install -g @nestjs/cli
nest new my-nest-app
cd my-nest-app
npm run start
API runs at: http://localhost:3000/users

Frontend Setup (React)
bash
Copy
Edit
npx create-react-app my-react-app
cd my-react-app
npm install axios
npm start
Frontend runs at: http://localhost:3000 (or another port if already in use)

Testing (NestJS)
bash
Copy
Edit
npm run test       # Unit tests
npm run test:e2e   # End-to-end tests
Build for Production
bash
Copy
Edit
# Backend
npm run build

# Frontend
npm run build
