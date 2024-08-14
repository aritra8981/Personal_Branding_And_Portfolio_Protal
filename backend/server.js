const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

// Secret key for JWT
// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// POST route for user signup
app.post('/users', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Email already exists' });
      }
      return res.status(500).json({ error: 'Failed to register user' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});






// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT id, name, email, password FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];

    try {
      // Compare the password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token, message: 'Login successful' });
    } catch (err) {
      return res.status(500).json({ error: 'Error comparing passwords' });
    }
  });
});


//Formcomponent

const multer = require('multer');
const path = require('path');



// Setting up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
  }
});

const upload = multer({ storage });

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/api/submit-form', upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'projectsImage', maxCount: 10 } // Adjust maxCount as needed
]), (req, res) => {
  const { name, jobRole, skills } = req.body;
  const profileImage = req.files.profileImage ? req.files.profileImage[0].path : null;
  const projects = req.body.projects; // This will need to be handled separately or as an array in req.body

  // Log received data (or handle it according to your needs)
  console.log({ name, jobRole, profileImage, projects, skills });

  res.json({ message: 'Form submitted successfully' });
});

// Ensure the uploads directory exists
const fs = require('fs');
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir);
}




app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});






