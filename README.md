# Data Importer

A Node.js project for importing data from CSV or JSON files into a database.

## Features

- Reads data from CSV or JSON files.
- Imports data into a MongoDB database.
- Uses Express.js for routing.
- Uses Mongoose for database interaction.
- Includes error handling middleware.
- Supports JWT authentication.

## Project Structure


├── README.md
├── server.js
├── routes
│   └── data.js
├── controllers
│   └── dataController.js
├── models
│   └── DataModel.js
├── middlewares
│   └── authMiddleware.js
├── utils
│   └── fileParser.js
├── package.json


## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd data-importer
    

3.  Install dependencies:

    
    npm install
    

4.  Configure environment variables:

    -   Create a `.env` file in the root directory.
    -   Add the following environment variables:

        
        MONGO_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_jwt_secret>
        

## Usage

1.  Start the server:

    
    npm start
    

2.  Import data:

    -   Send a POST request to `/api/data/import` with the data file.
    -   The file should be in CSV or JSON format.
    -   Include a valid JWT token in the `Authorization` header if authentication is enabled.

## API Endpoints

-   `POST /api/data/import`: Imports data from a file.
-   `POST /api/auth/register`: Registers a new user.
-   `POST /api/auth/login`: Logs in an existing user.
