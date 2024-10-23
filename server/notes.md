\*\*PART 1 -SQL Injection

    The frontend application queries a list of movies. The backend application stores the list of movies. However, due to lack of protection, a malicious user can manipulate the query to access user information. I was given the task of securing the application on both the frontend and backend.

- What is the issue? When did or could this happen?

  The Application is supposed to allow the user to search their database for specific movies and give movie titles and release dates.Thoroughly understanding how the application works before securing it. This application is a read-only app. Its users can not login or sign up for the application. They can only search its database of movie titles. This is the only functionality the application has available. At first glance at the code the application is vulnerable to SQL injection attacks. When running the application and injecting sql into the input field I was able to retrieve data. This is a no no!!

- Why does it matter?

  SQL injection attacks are extremely dangerous because they allow attackers to manipulate or even delete entire databases. This can result in unauthorized access to sensitive information, such as user data, and potentially grant attackers full control over the system. SQL injection has a long history of causing major security breaches, with high-profile incidents compromising millions of users’ personal information and costing companies millions in damages. Preventing these attacks is not only a technical necessity but also crucial for maintaining user trust, complying with legal regulations, and ensuring the overall security and integrity of the organization.

- Who is affected?

This sql injection is affecting the application and the users.

- How did you approach the research?

My first approach was to understand exactly what sql injections is.. Where and how can you do sql injection. What is the cause of sql injections? And how do you fix or stop sql injections from happening. Where does it rank among hackers? Which lead me to these websites, youtube and currently doing coursera [Google Cybersecurity Professional Certificate](https://www.coursera.org/professional-certificates/google-cybersecurity)

Websites : [portswigger](https://portswigger.net/web-security/sql-injection#what-is-sql-injection-sqli), [hackingsplaining](https://hacksplaining.com/lessons), [owasp](https://owasp.org/www-project-top-ten/) , [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)

Youtube: The Cyber Mentor - SQL Injection for Beginners, [ULTIMATE Cyber Security Training Discount // Zero to Cyber Pro](https://www.youtube.com/watch?v=P2OudFIq3s0), [SQL Injection Attack Tutorial - I didn&#39;t know you can do that](https://www.youtube.com/watch?v=5K7mApnSGwo&t=141s)[SQL Injection For Beginners](https://www.youtube.com/watch?v=cx6Xs3F_1Uc)[Cross-Site Scripting (XSS) Explained](https://www.youtube.com/watch?v=EoaDgUgS6QA)[https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js](https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js)

Practice injections: [https://demo.owasp-juice.shop/#/hacking-instructor?challenge=Score%20Board](https://demo.owasp-juice.shop/#/hacking-instructor?challenge=Score%20Board), [https://demo.testfire.net/feedback.jsp](https://demo.testfire.net/feedback.jsp), [https://play.picoctf.org/login](https://play.picoctf.org/login), https://pwning.owasp-juice.shop/companion-guide/latest/introduction/README.html

- How did you validate your hypothesis?

  To validate my hypothesis that the /search query in my application was vulnerable to SQL injection, I took several steps.

  First, I tested the current app by entering malicious SQL queries into the search input field on the frontend. The application allowed these queries to pass through to the backend, which confirmed my hypothesis of it being vulnerabile.

  To fix this, I implemented parameterized queries on the backend to prevent SQL injection attacks by making sure the user inputs are treated as data rather than part of the SQL command. Additionally, I added input validation in the backend to make sure that only valid search terms (like words) are accepted.

  On the frontend, I added validation to make sure that users could only enter alphabetical characters in the search field, preventing the entry of any potentially harmful characters or symbols.

After implementing these fixes, I tested the application again using various SQL injection attempts. The application successfully rejected these malicious inputs, confirming that my hypothesis was validated, and the issue had been resolved. I also installed a helmet. Helmet fortifies your app by adding an extra layer of security measures, making it harder for malicious actors to exploit vulnerabilities. It’s a bit like putting your app in a digital suit of armor.

- How can we prevent this from happening in the future?

To prevent this in the future, we should implement the following best practices:

\*\* **•** \*\*Use parameterized queries to safeguard against SQL injection.

\*\* **•** \*\*Apply input validation on both frontend and backend to ensure only valid data is accepted.

\*\* **•** \*\*Utilize stored procedures instead of dynamically building SQL queries.

\*\* **•** \*\*Employ a Web Application Firewall (WAF) to detect and block malicious traffic.

\*\* **•** \*\*Conduct continuous security audits and regular testing.

\*\* **•** \*\*Leverage automated security tools like Snyk and Splunk to identify vulnerabilities.

\*\* **•** \*\*Promote proper security education and awareness among developers to ensure secure coding practices.

1. How does SQL Injection impact a business?

- Threat actors can extract sensitive information (credit cards, passwords, usernames etc),modify, delete and corrupt databases. Which can cause business loss money in fines, settlements and operational cost due to breaches.

2. Why is it important to sanitize both Frontend and Backend?

- Sanitizing both Frontend and backend ensure robust security for the web applications. It improves user experience in the frontend and protects against client-side attacks. Backend sanitization prevents direct attacks to data and ensures integrity, protecting the server.

3. Can you provide examples of real-world SQL Injection attacks and their consequences?

   Sony PlayStation Network (2011)

Attack: Hackers exploited a vulnerability in Sony’s PlayStation Network (PSN) by using an SQL injection attack.

Consequence: The attackers stole personal information of 77 million accounts, including names, addresses, and possibly credit card information. Sony had to take down the PSN for nearly a month, costing the company millions in lost revenue, customer trust, and operational expenses. Sony faced multiple lawsuits and regulatory investigations. This attack highlighted the danger of insecure web applications that handle sensitive personal and financial data.

# Researchers find SQL injection to bypass airport TSA security checks https://www.bleepingcomputer.com/news/security/researchers-find-sql-injection-to-bypass-airport-tsa-security-checks/

\*\*
