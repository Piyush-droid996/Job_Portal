# 🚀 **Freelance Job Portal**

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=spring-boot&logoColor=white&style=for-the-badge" alt="Spring Boot">
  <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" alt="MySQL">
  <img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge" alt="Postman">
</div>

![Freelance Job Portal Screenshot](https://github.com/user-attachments/assets/4f735059-9aa9-49ac-a210-7f9c0dec1c77)

---

The **Freelance Job Portal** is designed to transform how freelancers and clients connect and collaborate by providing a user-friendly and efficient platform. Built with modern technologies like ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) and ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=spring-boot&logoColor=white), the portal ensures a robust and scalable solution for the challenges in the gig economy.

[🌐 **Live Website**](https://piyush-droid996.github.io/Job_Portal/)

---

## 💻 **Installation**

To set up the project on your local machine, follow these steps:

```bash
# Clone the repository
git clone https://github.com/piyush-droid996/Job_Portal.git
cd Job_Portal

# Install frontend dependencies
cd frontend
npm install

# Set up backend (Java Spring Boot)
# - Configure MySQL in application.properties
# - Run the Spring Boot application

# Start frontend
npm start
🧭 Usage
Once the application is running:

Freelancers can browse and apply for jobs, as well as manage their portfolios.
Clients can create, edit, and manage job listings.
Admins have full access to the admin dashboard for platform management.
📁 Folder Structure
bash
Copy code
Job_Portal/
├── backend/                # Spring Boot backend code
├── frontend/               # React.js frontend code
├── README.md               # This README file
├── .gitignore              # Git ignore configuration
└── ...
🧩 Components
<table> <thead> <tr> <th>Component</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>📋 <strong>ManageJobs</strong></td> <td>Allows clients to add, edit, and delete jobs.</td> </tr> <tr> <td>📝 <strong>JobListing</strong></td> <td>Displays a list of job opportunities for freelancers.</td> </tr> <tr> <td>👤 <strong>UserProfile</strong></td> <td>Manages user profiles, including portfolios and job history.</td> </tr> <tr> <td>⚙️ <strong>AdminDashboard</strong></td> <td>Provides administrative functionalities for platform management.</td> </tr> </tbody> </table>
🌐 API Endpoints
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>GET</td> <td>/jobs</td> <td>Retrieve all job listings.</td> </tr> <tr> <td>POST</td> <td>/jobs</td> <td>Create a new job listing.</td> </tr> <tr> <td>PUT</td> <td>/jobs/{id}</td> <td>Update an existing job listing.</td> </tr> <tr> <td>DELETE</td> <td>/jobs/{id}</td> <td>Delete a job listing by its ID.</td> </tr> </tbody> </table>
☕ Support the Developer
If you find this project helpful and would like to support future development, you can:
