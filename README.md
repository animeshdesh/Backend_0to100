# Backend_0to100

A Guide into Backend Development for Beginners

# What is Mern Stack?

Lets start with basic and go one by one

## Backend Development with MERN Stack: A Beginner's Guide

### 1. Building a Server using Express

**Express.js** is a web application framework for Node.js. It simplifies the process of building server-side applications and APIs. Here's a basic example to set up an Express server in your `index.js` file:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This code creates a simple Express server that listens on port 3000. When you visit `http://localhost:3000`, it responds with "Hello World!".

### 2. Data Modeling

Data modeling in the context of the MERN stack typically refers to defining the structure of the data that will be stored in MongoDB (the 'M' in MERN). Mongoose is a popular ODM (Object Data Modeling) library that works with MongoDB.

Here’s an example of a simple Mongoose schema:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
```

This code defines a `User` model with `name` and `age` fields. Mongoose schemas are used to define the structure of documents within a collection in MongoDB, providing a way to validate and query the data.

---

This README snippet provides a concise introduction to setting up an Express server and data modeling using Mongoose in the MERN stack. Remember to install necessary packages (`express`, `mongoose`) using npm before starting your project.
