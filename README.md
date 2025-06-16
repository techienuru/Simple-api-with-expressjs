# Simple API with Express.js

## 📋 Overview

This project is a simple REST API built using Node.js and Express.js. It demonstrates the core CRUD operations—Create, Read, Update, and Delete—on an in-memory data store. It also follows RESTful principles and includes basic middleware and error handling.

## 🚀 Features

- **GET /items** – Retrieve all items
- **GET /items/:id** – Retrieve a single item by ID
- **POST /items** – Create a new item
- **PUT /items/:id** – Update an item by ID
- **DELETE /items/:id** – Delete an item by ID
- **Error Handling** – Returns appropriate status codes for invalid requests
- **Middleware** – Parses JSON body content using `express.json()`

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/techienuru/Simple-api-with-expressjs.git
   cd Simple-api-with-expressjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   node server.js
   ```

   Or if you have `nodemon` installed:

   ```bash
   nodemon server.js
   ```

4. **API is available at**
   ```
   http://localhost:3500
   ```

## 🧪 Example Requests (Using Postman)

- **GET all items**

  ```
  GET http://localhost:3500/items
  ```

- **GET single item**

  ```
  GET http://localhost:3500/items/1
  ```

- **POST new item**

  ```
  POST http://localhost:3500/items
  Body (JSON):
  {
    "name": "New Item",
    "description": "This is a new item"
  }
  ```

- **PUT update item**

  ```
  PUT http://localhost:3500/items/1
  Body (JSON):
  {
    "name": "Updated Name",
    "description": "Updated description"
  }
  ```

- **DELETE item**
  ```
  DELETE http://localhost:3500/items/1
  ```

## 📂 Project Structure

```
Simple-api-with-expressjs/
├── controllers/
│   └── items.js
├── routers/
│   └── items.js
├── server.js
├── package.json
├── README.md
```

## 📧 Author

**Ibrahim Nurudeen**  
GitHub: [techienuru](https://github.com/techienuru)
