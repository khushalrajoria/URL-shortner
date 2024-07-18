# URL Shortener

A simple URL shortener application built using Node.js, Express, and Mongoose. The app uses the `shortid` plugin to generate short URLs and records timestamps of URL creation. It also tracks the number of clicks (visit history) and redirects users to the original link using the short link.

## Features

- Shorten URLs using `shortid`.
- Record timestamp of URL shortening.
- Track the number of clicks (visit history).
- Redirect to the original link using the short link.
- Tested using Postman.

## Prerequisites

- Node.js
- MongoDB

## Getting Started

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the MongoDB server (if not already running).

4. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGO_URI=mongodb://127.0.0.1:27017/short-URL
    ```

### Running the Application

1. Start the server:

    ```sh
    npm start
    ```

2. The server will start on port 8001. You should see the message `Server started at port 8001`.

## API Endpoints

### Create a Short URL

- **Endpoint:** `POST /url/shorten`
- **Description:** Generates a new short URL.
- **Request Body:**
  ```json
  {
    "url": "https://example.com"
  }

### Project Structure
  .
├── controllers
│   └── url.js
├── models
│   └── url.js
├── routes
│   └── url.js
├── connect.js
├── index.js
└── README.md

