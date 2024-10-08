# RocktheCode_P06
Architecture buildings API
This project is a Node.js-based REST API for managing famous architectural buildings. The stack includes MongoDB, Express, JavaScript, and Node.js. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on buildings and architects.

Project Structure
├── data                # Contains sample data for buildings
├── src
│   ├── api
│   │   ├── controllers # API request handlers
│   │   ├── models      # Mongoose schemas
│   │   └── routes      # API route handlers
│   └── config          # Database connection setup
├── utils
│   └── seeds           # Seeding script for populating MongoDB with 
├── .env                # Environment variables for the project
├── package.json        # Dependencies and npm scripts
├── index.js            # Entry point of the project
└── README.md           # Project documentation

Environment Variables
The environment variables are set up in a .env file 
DB_URL= mongodb+srv://UserName:8tU4HE1jvrECvqVm@cluster0.h3wfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

Usage
1.	Start the server in development mode with nodemon:
npm run dev
2.	Or start the server in production mode:
npm start
3.	Server will be deployed at http://localhost:3000.

API Endpoints
The following API routes are available for interacting with buildings and architects:

Buildings Endpoints:
•	GET /api/v1/buildings: Retrieve all buildings
•	POST /api/v1/buildings: Add a new building
•	PUT /api/v1/buildings/:id: Update an existing building by ID
•	DELETE /api/v1/buildings/:id: Delete a building by ID

Architects Endpoints:
•	GET /api/v1/architects: Retrieve all architects 
•	POST /api/v1/architects: Add a new architect 
•	PUT /api/v1/architects/:id: Update an existing architect by ID
•	DELETE /api/v1/architects/:id: Delete a architect by ID

Health Check Endpoint:
•	GET /ping: A simple health check that returns pong

Seed Data
To populate the database with sample buildings data:
1.	Run the seed script:
npm run seed
This will remove any existing data in the buildings collection and insert the sample buildings from the data/buildings.js file.

Technologies
•	Node.js: JavaScript runtime for building server-side applications
•	Express.js: Web framework for Node.js to handle routing 
•	MongoDB: Database for storing the buildings and architects data
•	Mongoose: Defining schemas and interacting with the database
•	dotenv: Environment variable management
•	nodemon: Development tool to automatically restart the server on file changes

ENJOY!

