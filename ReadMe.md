# Cybersecurity Project: SQL Injection Vulnerabilities

## Overview

This project focuses on identifying and mitigating SQL Injection vulnerabilities in a web application. Our goal is to secure the application by implementing best practices and robust security measures.

## Project Goals

The primary objective of this project is to understand the application thoroughly, identify potential SQL Injection vulnerabilities, and implement security measures to prevent such attacks.

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

Once running, both the client and server will be available:

Visit http://localhost:3000 to see the React app.\
Visit http://localhost:3001/users to view all users.\
Visit http://localhost:3001/movies to view all movies.

## Installation Instructions

1. **Clone the repository**:
```bash
git clone <repository-url>
```

**Navigate to the project directory**:

```bash
cd project-directory
```

**Install backend dependencies**:
```bash
npm install
```

**Set up environment variables**: Create a `.env` file in the root directory with the following content:
```Env
DB_HOST=your-db-host
DB_PORT=your-db-port
DB_DATABASE=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password
```

**Start the backend server**:
```bash
npm run start
```
**Navigate to the frontend directory**:
```bash
cd frontend
```
**Install frontend dependencies**:
```bash
npm install
```
**Start the frontend application**:
```bash
npm start
```

Once running, both the client and server will be available:

Visit http://localhost:3000 to see the React app.\
Visit http://localhost:3001/users to view all users.\
Visit http://localhost:3001/movies to view all movies.

## Usage Guide

### Search for Movies

1. **Navigate to the search feature** in the frontend application.
2. **Enter a movie title** to search for specific movies from the database.

## SQL Injection Vulnerabilities

### What is SQL Injection?

SQL Injection is a code injection technique that exploits vulnerabilities in an application’s software by manipulating SQL queries to access or manipulate the database.

### Objectives

1. **Understand the Application**: Thoroughly review the application’s code and identify points of user input that interact with the database.
    
2. **Identify Vulnerabilities**
    : Manual code reviews to find potential SQL injection points.
    
3. **Implement Security Measures**: Apply parameterized queries and input validation on both the frontend and backend to prevent SQL injection attacks.
    
4. **Test and Validate**: Ensure the applied security measures are effective through penetration testing and security audits.

### Steps Taken

1. **Research**:
    
    - **SQL Injection**: Explored its impacts and prevention methods using resources like OWASP, YouTube tutorials, and Coursera.
        
    - **Sources**:
        
        - **Websites**: PortSwigger, HackingSplaining, OWASP Juice Shop
            
        - **YouTube**: The Cyber Mentor - SQL Injection for Beginners, ULTIMATE Cyber Security Training Discount // Zero to Cyber Pro, SQL Injection Attack Tutorial - I didn't know you can do that SQL Injection For Beginners, Cross-Site Scripting (XSS) Explained.
        
1. **Identify Vulnerabilities**:
    
    - Tested the application by injecting SQL commands in user inputs.
    - Example: Entered `' OR 1=1; SELECT * FROM users --` in the search field and confirmed the application was susceptible to SQL Injection.
        
2. **Implement Security Measures**:
    
    - **Backend**: Used parameterized queries and input validation to ensure that inputs are treated as 
    data, not executable code.

```javascript
const query = `SELECT * FROM movies WHERE title ILIKE $1`;
const result = await db.any(query, [title]);
```

**Frontend**: Implemented input validation to ensure only valid data is sent to the backend.
```javascript
if (!/^[A-Za-z0-9]+$/.test(title)) {
  alert("Please enter a valid movie title");
  return;
}
```
1. **Validation**:
- Conducted tests using various SQL injection attempts to confirm the application's resilience.     
- Ensured detailed error messages were logged internally and only generic messages shown to users.
        

### Vulnerability
```javascript
app.get("/search", async (req, res) => {
  const { title } = req.query;
  const query = `SELECT * FROM movies WHERE title ILIKE '%${title}%'`;
  try {
    const result = await db.any(query);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});
```

### Fixed Code
```javascript
app.get("/search", async (req, res) => {
  const { title } = req.query;
  // Input validation
  if (!/^[A-Za-z0-9]+$/.test(title)) {
    res.status(400).send("Invalid input");
    return;
  }
  const query = `SELECT * FROM movies WHERE title ILIKE $1`;
  try {
    const result = await db.any(query, [title]); // Parameterized query
    res.json(result);
  } catch (err) {
    console.error(err.message); // Internal logging
    res.status(500).send("An error has occurred"); // Generic user message
  }
});
```

## Learning Outcomes

- **Skill Development**: Enhanced skills in identifying and fixing SQL Injection vulnerabilities, and integrating secure coding practices.
    
- **Future Preparedness**: Gained confidence in implementing and maintaining security measures, preparing for future challenges in cybersecurity.
    
### Real-World Examples

- **Sony PlayStation Network (2011)**: SQL injection attack compromised 77 million user accounts, highlighting the importance of securing web applications.
    
## Conclusion

Securing web applications is essential for protecting sensitive data and maintaining user trust. This project demonstrates the importance of understanding and mitigating SQL Injection vulnerabilities through research, implementation, and validation of effective security measures.
