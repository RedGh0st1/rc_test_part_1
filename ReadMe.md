## Folder Structure

```
root
│
├── client (React frontend)
│ ├── package.json
│ └── node_modules
│
├── server (Node.js backend)
│ ├── package.json
│ └── node_modules
│
└── package.json (root)
```

## How to Run This Application (At the ROOT of the FOLDER)

Follow these steps:

1. Install dependencies for the client and server:

```
   npm run install:client
   npm run install:server
```

2. Set up the database:

```
   npm run database
```

3. Seed the database:

```
   npm run seed
```

4. Start the application:

```
   npm run start
```

Once running, both the client and server will be available:

Visit http://localhost:3000 to see the React app.\
Visit http://localhost:3001/users to view all users.\
Visit http://localhost:3001/movies to view all movies.

## React Application
# Project Title: SQL Injection Prevention
## Overview

This project involves two applications: a frontend application built with React JS and a backend application built with Node JS. The frontend application queries a list of movies, but currently lacks adequate protection, allowing a malicious user to manipulate the query and access sensitive user information. The goal is to secure the application on both the frontend and backend.

## Objectives

1. Understand the application.
    
2. Secure the frontend and backend.
    

## Key Points

- **Issue**: The app allows SQL injection via the search input.
    
- **Impact**: Potential data breaches and loss of sensitive information.
    
- **Affected**: The application and its users.
    
- **Research**: Explored SQL injection methods and solutions.
    
- **Validation**: Tested and fixed vulnerabilities using parameterized queries and input validation.
    
- **Future Prevention**:
    
    - Use parameterized queries.
        
    - Validate inputs on both frontend and backend.
        
    - Employ stored procedures.
        
    - Use a Web Application Firewall (WAF).
        
    - Conduct regular security audits.
        
    - Use security tools like Snyk and Splunk.
        

## Real-World Example

- **Sony PlayStation Network (2011)**: Hackers stole personal information of 77 million accounts through SQL injection.
    
