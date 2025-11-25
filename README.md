# MERN Bug Tracker

A **Bug Tracker** application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project demonstrates **comprehensive testing and debugging strategies** including unit, integration, and end-to-end testing.

#Screenshots
![App Home](screenshots/Home.png)
![Report Bug](screenshots/form.png)
![Jest Coverage Report](screenshots/coverage.png)
![Cypress Test Runner](screenshots/cypress.png)

---

## **Table of Contents**

- [Project Structure](#project-structure)  
- [Features](#features)  
- [Installation](#installation)  
- [Running the Project](#running-the-project)  
- [Testing](#testing)  
- [Debugging Techniques](#debugging-techniques)  
- [Testing Approach and Coverage](#testing-approach-and-coverage)  
- [Screenshots](#screenshots)  

---

## **Project Structure**


mern-bug-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── tests/
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   └── App.jsx
│   └── cypress/            # End-to-end tests (optional)
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/          # Helper functions (validation, formatters, etc.)
│   │   └── middleware/
│   └── tests/
│       ├── unit/
│       └── integration/
│
├── package.json
└── README.md


---

## **Features**

- Report new bugs via a form  
- View all reported bugs in a list  
- Update bug status: **open → in-progress → resolved**  
- Delete bugs  
- Error handling with Express middleware and React error boundaries  

---

## **Installation**

1. **Clone the repository:**

```bash
git clone <your-github-classroom-repo-url>
cd mern-testing


2. Install dependencies for backend and frontend:
# Server
cd server
pnpm install

# Client
cd ../client
pnpm install

3. Ensure MongoDB is running locally (or configure MongoDB Atlas).

Running the Project

Backend server
cd server
pnpm run dev

Server runs on http://localhost:5000 by default.

Frontend client
cd client
pnpm run dev

Frontend runs on http://localhost:5173 by default.

Testing
Frontend Tests

Unit tests (React components)
cd client
pnpm run test

Integration tests (API calls + UI)
cd client
pnpm run test

End-to-End tests (Cypress)
cd client
pnpm run cypress:open

Click on the test file bug-flow.cy.js to run E2E tests.

Backend Tests
Unit tests (controller functions)

cd server
pnpm run test

Integration tests (API routes with MongoDB Memory Server)

cd server
pnpm run test

Code Coverage

Generate Jest coverage report:
# Client
cd client
pnpm run test -- --coverage

# Server
cd ../server
pnpm run test -- --coverage

Coverage reports show lines, functions, and branches tested.
Ensure at least 70% coverage for unit tests.

Debugging Techniques

Frontend

React DevTools to inspect component state

Console logs in form submission and API calls

React Error Boundaries for graceful error handling

Backend

Console logs for request/response tracking

Node.js inspector: node --inspect index.js

Express error-handling middleware (errorMiddleware.js)

Network & API

Chrome DevTools → Network tab to debug API requests

Testing Approach

Unit Testing

Backend: Test controller functions using Jest and mocking Mongoose models.

Frontend: Test components (e.g., BugForm, BugList) with React Testing Library.

Integration Testing

Backend: Test API routes with Supertest and in-memory MongoDB.

Frontend: Test UI updates triggered by API responses.

End-to-End Testing

Cypress tests simulate full user flow:

Reporting a bug

Updating bug status

Deleting a bug


Conclusion

This MERN Bug Tracker demonstrates:
Comprehensive unit, integration, and end-to-end testing
Proper debugging techniques for both frontend and backend
Error handling in React and Express
Well-structured and maintainable code