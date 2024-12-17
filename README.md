# Backend Project
#### Online-Book-Store-Application

## Overview

This is the backend part of a web application that provides APIs and handles server-side operations. It is built using Node.js, Express.js, and MongoDB, offering robust and scalable functionality for managing the application's data and logic.

## Features

- **Authentication**: Secure user login and registration using JWT.
- **Database Integration**: Utilizes MongoDB with Mongoose for data modeling and management.
- **Data Security**: Passwords are encrypted using bcrypt.
- **Environment Configuration**: Environment variables managed using dotenv.
- **Cross-Origin Requests**: CORS enabled for seamless frontend-backend communication.
- **Live Development Server**: Powered by Nodemon for efficient development.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Minimalist web framework for building APIs and middleware.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **bcrypt**: For hashing passwords securely.
- **jsonwebtoken (JWT)**: For authentication and session management.
- **dotenv**: For managing environment variables.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)
- MongoDB (installed locally or using a cloud service like MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akmroyal/online-book-managment-backend.git
   cd online-book-managment-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following configuration:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret-key
   ```
   Replace the placeholders with your actual values.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── controllers       # Request handling logic
├── models            # Database models
├── routes            # API endpoints
├── middleware        # Custom middleware functions
├── utils             # Utility functions
├── index.js          # Main entry point of the application
├── package.json      # Project metadata and dependencies
└── .gitignore        # Ignored files
```

## Scripts

- **`npm run start`**: Start the server in production mode.
- **`npm run dev`**: Start the server in development mode with hot-reloading (using Nodemon).

## API Endpoints

Below is a brief overview of the available endpoints:

- **Authentication**:
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user and get a JWT token.

- **User Management**:
  - `GET /api/users`: Get all users.
  - `GET /api/users/:id`: Get a single user by ID.
  - `PUT /api/users/:id`: Update a user's details.
  - `DELETE /api/users/:id`: Delete a user.

- **Books (example module)**:
  - `GET /api/books`: Get all books.
  - `POST /api/books`: Add a new book.
  - `PUT /api/books/:id`: Update a book's details.
  - `DELETE /api/books/:id`: Delete a book.

## Dependencies

Below are the key dependencies used in the project:

- **express**: Web framework for building APIs.
- **mongoose**: ODM library for MongoDB.
- **bcrypt**: For password hashing.
- **jsonwebtoken**: For generating and verifying JWTs.
- **dotenv**: For managing environment variables.
- **cors**: For handling cross-origin requests.

## DevDependencies

- **nodemon**: Development tool for auto-restarting the server on changes.

## Snapshots

You can view snapshots or a demo of the backend project [Here](https://www.linkedin.com/posts/ashu-maurya-9026xxxx_mernstack-webdevelopment-nodejs-activity-7274376374746804225-1M3u?utm_source=share&utm_medium=member_desktop). Click the link to explore details.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to contact:

- **Name**: Ashutosh Maurya
- **Email**: ashutoshmaxxxx@gmail.com
- **GitHub**: [Akm Royal](https://github.com/akmroyal)

