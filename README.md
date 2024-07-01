# SDE Intern Assignment: Deep Tree Implementation with Next.js and NestJS

## Objective

Create a full-stack application using Next.js for the front end and NestJS for the backend to build, manage, and persist a tree structure with a depth of 10,000 nodes.

## Completed Milestones

### Milestone 1: Initial Setup

#### Project Setup

- **Frontend:** Set up a new Next.js project. 🌐
- **Backend:** Set up a new NestJS project. 🔧
- **Version Control:** Initialize a Git repository for version control. 🗃️

### Milestone 2: Basic Frontend Structure

#### Project Structure

- Follow best practices for code structure and modularization in the Next.js project.
- Create basic components (e.g., TreeNode, Tree).

#### User Authentication

- Implement a simple username input form.
- Set up state management (e.g., React context or Redux) for managing user state.

### Milestone 3: Backend Structure and User Management

#### Backend Setup

- Set up the basic structure for the NestJS project.

#### Database Integration

- Integrate a database (e.g., MongoDB, PostgreSQL). 🗄️
- Design and implement a schema for storing user information and tree structures. 📝

#### API Endpoints for User Management

- Create an endpoint to validate and register unique usernames. 🔐
- Implement robust input validation and error handling for these endpoints.

### Milestone 5: Basic Tree UI and Node Interaction

#### Tree UI Components

- Create React components to represent tree nodes. 🖼️
- Design a UI that can handle a tree with significant depth, considering performance and usability. ⚙️

#### Node Interaction

- Implement functionality to handle clicks on leaf nodes.
- Ensure that when a leaf node is clicked, we can edit its value, and its value is updated and propagated up to all its parent nodes.
