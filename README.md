# DevQuest Web Security Labs

A hands-on AppSec and DevSecOps training project with **20 web security labs**, each containing:

- a **vulnerable** version
- a **fixed** version
- a practical **README**
- reproducible examples for study, portfolio, and demonstration

This repository was designed to simulate common web application vulnerabilities in a didactic and portfolio-friendly format.

---

## Project Structure

Each lab follows the same pattern:

~~~text
lab-name/
├── vulnerable/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── fixed/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
~~~

---

## Labs

### Phase 1 — Client-Side Injection & Input Handling
1. **XSS DOM**
2. **innerHTML Injection**
3. **Weak Form Validation**
4. **Insecure localStorage**
5. **URL Parameter Abuse**

### Phase 2 — Auth, Session & Exposure
6. **Open Redirect**
7. **Insecure Login Mock**
8. **Sensitive Data Exposure**
9. **Insecure Token Storage**
10. **Missing Cookie Flags**

### Phase 3 — Browser Security Controls
11. **Weak CSP / CSP Bypass**
12. **Clickjacking**
13. **CORS Misconfiguration**
14. **Missing Security Headers**
15. **Weak API Authorization**

### Phase 4 — Advanced Web Vulnerabilities
16. **Mass Assignment**
17. **IDOR**
18. **Stored XSS**
19. **Prototype Pollution**
20. **Security Dashboard**

---

## Purpose

This project was built to:

- practice real-world **web security concepts**
- demonstrate **vulnerable vs fixed implementations**
- create a strong **AppSec / DevSecOps / Security Engineer portfolio**
- provide reusable material for demos, studies, and technical writeups

---

## How to Run

You can open each lab with **Live Server** in VS Code.

Example:

~~~text
01-devquest-security-lab-xss-dom/vulnerable/index.html
~~~

Or serve locally with Python:

~~~bash
python3 -m http.server 8000
~~~

Then access:

~~~text
http://localhost:8000
~~~

---

## Recommended Learning Flow

Start with the vulnerable version first, understand the issue, reproduce the behavior, and then compare it with the fixed version.

Suggested sequence:

1. input handling and DOM issues
2. authentication and session flaws
3. browser-enforced security controls
4. authorization and advanced object manipulation issues

---

## Skills Demonstrated

- Web Application Security
- AppSec Fundamentals
- DevSecOps Mindset
- Secure Front-End Patterns
- Input Validation
- Output Encoding
- Session Security
- Browser Security Controls
- Authorization Logic Review
- Vulnerability Demonstration Design

---

## Disclaimer

These labs are intentionally insecure and exist **for educational purposes only**.

Do **not** deploy the vulnerable versions in production environments.

---

## Author

Developed as part of a practical security lab portfolio focused on **Web Security, AppSec, DevSecOps, and Offensive Security learning**.
