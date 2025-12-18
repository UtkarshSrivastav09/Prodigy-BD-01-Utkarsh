# PRODIGY_BD_01

🚀 REST API with CRUD

A backend-focused REST API built using Node.js, Express.js, and MongoDB that performs full CRUD (Create, Read, Update, Delete) operations.
This project demonstrates backend development skills, API design, database integration, and environment-based configuration.

🛠️ Tech Stack
Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS
* Nodemon

Frontend (Optional Client)

* React.js (Create React App)
* Bootstrap / React-Bootstrap

Prodigy_BD_01
│
├── backend
│   ├── src
│   │   ├── configuration
│   │   │   └── dbConfig.js
│   │   ├── controllers
│   │   ├── models
│   │   │   └── user.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   ├── services
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend
│
└── README.md

⚙️ Environment Configuration

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employee_db
CORS_ORIGIN=http://localhost:3000

▶️ How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/your-username/Prodigy_BD_01.git
cd Prodigy_BD_01

2️⃣ Run Backend Server
cd backend
npm install
npm run dev


Server will start at:

http://localhost:5000

3️⃣ Test API

Open browser or Postman:

GET http://localhost:5000/api/user


Root check:

http://localhost:5000

🔗 API Endpoints

Method	        Endpoint	        Description
GET	            /api/user	        Fetch all users
POST	        /api/user	        Create a new user
PUT	            /api/user/:id	    Update user by ID
DELETE	        /api/user/:id	    Delete user by ID

🧪 Testing Tools

* Browser
* Postman
* MongoDB Compass

🚀 Key Highlights

--> Clean REST API architecture
--> Environment-based configuration
--> Proper error handling
--> MongoDB connection using Mongoose
--> Scalable project structure

📈 Future Enhancements

--> JWT Authentication
--> Role-based authorization
--> Input validation
--> Pagination & filtering
--> Deployment on cloud platforms

📌 Project Purpose

This project was developed as part of Prodigy Internship Task – Prodigy_BD_01 to demonstrate backend development skills and REST API design.


Created By Utkarsh Srivastav
Backend Developer Intern at Prodigy InfoTech
Gmail: utkarshsrivastav2206@gmail.com