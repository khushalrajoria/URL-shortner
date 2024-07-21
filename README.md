# URL Shortener

A simple URL shortener application built using Node.js, Express, and Mongoose. The app uses the `shortid` plugin to generate short URLs and records timestamps of URL creation. It also tracks the number of clicks (visit history) and redirects users to the original link using the short link.

## Features

- Shorten URLs using `shortid`.
- Record timestamp of URL shortening.
- Track the number of clicks (visit history).
- Redirect to the original link using the short link.
- User authentication (signup, login).
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
  ```

### Login

- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a user.
- **Request Body:**
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```

### Signup

- **Endpoint:** `POST /auth/signup`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```

## Project Structure

```
├── controllers
│   ├── url.js
│   └── user.js
├── middlewares
│   └── auth.js
├── models
│   ├── url.js
│   └── user.js
├── routes
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── services
│   └── auth.js
├── views
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── .gitignore
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

### Shortened URLs List (on MongoDB)

![image](https://github.com/user-attachments/assets/245111b6-e012-4110-ae7b-ad30f947934d)

### Postman Result

![image](https://github.com/user-attachments/assets/dfd5e3bd-dbd0-481c-9142-031f78cad2eb)

###UI
##HOME page
![image](https://github.com/user-attachments/assets/8b961ce0-f581-4e3c-802a-dfcb78f78505)

##LOGIN PAGE
![image](https://github.com/user-attachments/assets/7dcfd9d1-ecb8-423d-804d-5bbaf0cfbf80)

##SIGNUP
![image](https://github.com/user-attachments/assets/bf15010a-880c-4cc2-82a3-d234bf80da7f)




