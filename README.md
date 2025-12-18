<h1># PRODIGY_BD_01</h1>

<h1>🚀 REST API with CRUD</h1>

A backend-focused REST API built using Node.js, Express.js, and MongoDB that performs full CRUD (Create, Read, Update, Delete) operations.
This project demonstrates backend development skills, API design, database integration, and environment-based configuration.

<h1>🛠️ Tech Stack</h1>
Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS
* Nodemon

Frontend 

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

<h1>⚙️ Environment Configuration</h1>

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employee_db
CORS_ORIGIN=http://localhost:3000

<h1>▶️ How to Run the Project</h1>
1️⃣ Clone Repository<br>
git clone https://github.com/your-username/Prodigy_BD_01.git<br>
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

<h1>🔗 API Endpoints</h1>

Method	        Endpoint	        Description
GET	            /api/user	        Fetch all users
POST	          /api/user	        Create a new user
PUT	            /api/user/:id	    Update user by ID
DELETE	        /api/user/:id	    Delete user by ID

<h1>🧪 Testing Tools</h1>

* Browser
* Postman
* MongoDB Compass

<h1>🚀 Key Highlights</h1>

--> Clean REST API architecture
--> Environment-based configuration
--> Proper error handling
--> MongoDB connection using Mongoose
--> Scalable project structure

<h1>📈 Future Enhancements</h1>

--> JWT Authentication
--> Role-based authorization
--> Input validation
--> Pagination & filtering
--> Deployment on cloud platforms

<h1>📌 Project Purpose</h1>

This project was developed as part of Prodigy Internship Task – Prodigy_BD_01 to demonstrate backend development skills and REST API design.


<h3>Created By Utkarsh Srivastav</h3>
Backend Developer Intern at Prodigy InfoTech
Gmail: utkarshsrivastav2206@gmail.com
