# RocktheCode_P06 

## Architecture buildings API 🏙️​

### This project is a Node.js-based REST API for managing famous architectural buildings. 

The stack includes:
- MongoDB
- Express
- JavaScript
- Node.js.

💻​ The API allows users to perform CRUD (Create, Read, Update, Delete) operations on buildings and architects.

## Project Structure
![ProjectStructure](https://github.com/user-attachments/assets/f215804f-79ee-489d-85c5-9e5740a6b96e)


## Environment Variables
The environment variables are set up in a .env file 

## Usage
- Start the server in development mode with nodemon: npm run dev
- Or start the server in production mode: npm start
- Server will be deployed at http://localhost:3000.

## API Endpoints

### Buildings Endpoints:
- GET /api/v1/buildings: Retrieve all buildings
- POST /api/v1/buildings: Add a new building
- PUT /api/v1/buildings/:id: Update an existing building by ID
- DELETE /api/v1/buildings/:id: Delete a building by ID

### Architects Endpoints:
- GET /api/v1/architects: Retrieve all architects 
- POST /api/v1/architects: Add a new architect 
- PUT /api/v1/architects/:id: Update an existing architect by ID
- DELETE /api/v1/architects/:id: Delete a architect by ID

### Health Check Endpoint:
- GET /ping: A simple health check that returns pong

## Seed Data
To populate the database with sample buildings data run the seed script: 
- npm run seed

This will remove any existing data in the buildings collection and insert the sample buildings from the data/buildings.js file.

## Technologies
- Node.js: JavaScript runtime for building server-side applications,
- Express.js: Web framework for Node.js to handle routing,
- MongoDB: Database for storing the buildings and architects data,
- Mongoose: Defining schemas and interacting with the database,
- dotenv: Environment variable management,
- nodemon: Development tool to automatically restart the server on file changes



 ### ENJOY 🤍

