# URL Shortener with Authentication and URL History

This is a URL shortener application built with Node.js and EJS, featuring user authentication and a history of previously generated URLs for each user with no. of users visited using the shortened url.

## Features

- User registration and authentication (login)
- Shorten long URLs
- Track and display the history of shortened URLs for each user
- EJS templating engine for dynamic content rendering

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/amey-kachare/URL-Shortner.git
    cd URL-Shortner
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_uri
    SESSION_SECRET=your_session_secret
    ```

4. Start the MongoDB server:
    ```sh
    mongod
    ```

5. Start the application:
    ```sh
    npm start
    ```

6. Open your browser and visit `http://localhost:3000`.

## Usage

### User Registration and Authentication

- Register a new account by clicking on the "Register" link.
- Log in using your credentials.

### Shorten a URL

- After logging in, enter a long URL in the input field and click the "Shorten" button.
- The shortened URL will be displayed, and the original URL will be saved in your history.

### View URL History

- Click on the "History" link to view all previously generated URLs.

## Project Structure

- `app.js` - Main application file
- `config/` - Configuration files (e.g., database connection)
- `controller/` - Route handlers
- `model/` - Mongoose models (User, URL)
- `public/` - Static assets (CSS, JS, images)
- `routes/` - Application routes
- `view/` - EJS templates

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.
