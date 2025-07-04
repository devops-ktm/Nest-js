# User List App – NestJS + React

A simple yet robust full-stack application for managing a list of users. Built with **NestJS** for the backend and **React** for the frontend, this project demonstrates basic **CRUD operations** with hardcoded data. Ideal for learning full-stack development fundamentals using modern JavaScript frameworks.

---

## 🚀 Features

- **View Users**: Display user details (ID, Name, Email) in a clean table layout  
- **Edit Users**: Update user name and email directly in-place  
- **Delete Users**: Remove users with a confirmation prompt  
- **State Management**: React `useState` for efficient state handling  
- **API Communication**: Axios for smooth HTTP requests between frontend and backend  
- **REST API**: Built with NestJS controllers to handle all CRUD routes  

---

## 🛠 Tech Stack

### Frontend
- React  
- Axios  
- JavaScript  

### Backend
- NestJS  
- TypeScript  

### Tools
- Node.js  
- npm  
- Jest (for testing)

---

## ⚙️ Prerequisites

- **Node.js** (v16 or higher)  
- **npm** (latest stable version)

---

## 🔧 Setup Instructions

### Backend Setup – NestJS

```bash
# Install NestJS CLI globally
npm install -g @nestjs/cli

# Create a new NestJS project
nest new my-nest-app

# Navigate to the project directory
cd my-nest-app

# Start the backend server
npm run start
