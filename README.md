# Cybersecurity Role-Based Dashboard
This is a website that simulates a cybersecurity system for different company roles.
All the data is for simulation only.

## 🎥 Live Demo
![Chart Live Demo](./chart.gif?v=0)

🔗 [Live Demo Here](https://josh-yo.github.io/cybersecurity_role_dashboard/index.html)

## 🔐 Project Goals

- Explore how different roles in a company handle cybersecurity
- Build a front-end only demo to simulate role-based awareness training
- Create realistic scenarios for phishing, incident reports, and feedback flow
- Practice interactive UI design with animations and logic handling
## 👤 Roles, Features and Login Accounts

Use the following test accounts to log in:

| Role     | Email                      | Password | MFA Code | Main Features |
|----------|----------------------------|----------|----------|----------------|
| Employee | amadeus@cybersecurity.com  | 123456   | 000000   | Training, suspicious email check, incident report, feedback |
| IT Staff | jane@cybersecurity.com     | 123456   | 000000   | Advanced training, phishing response, incident tracking |
| Manager  | emily@cybersecurity.com    | 123456   | 000000   | Training overview, reply feedback, incident summary dashboard |

> This system uses a mock login and MFA (multi-factor authentication)
> After login, users are redirected to the correct dashboard based on their role

💡 To test different roles, please log out first and log in with another Email


## 🧩 Modules

### 📥 Login

- MFA login system (email + code)
- Role-based redirection

### 📨 Email Filtering

- Shows fake emails (some suspicious)
- Pop-up scan flow animation
- User can scan, report, move to junk, or trust emails
- Memory saved in localStorage

![Email Live Demo](./email.gif?v=0)

### 🎓 Training System

- Staff and IT pages with video + quiz
- Manager sees overall training result
- Tracks completion and scores (simulated)

### 💬 Feedback

- Staff can submit feedback after training
- Manager can reply
- Employees can view replies

### 🚨 Incident Management

- Employee can report a problem (with priority and screenshot)
- IT can respond to the case step by step
- IT can track open and closed reports
- Manager sees overall summary (KPI, response time, charts)

## 🧪 Technology Used

- HTML / CSS / JavaScript
- Bootstrap
- Chart.js (for drawing summary charts)

## ⚠️ Notes

- This is a static project with no real backend
- Some data (like reports and answers) is stored in localStorage
- All emails, names, and reports for demo only