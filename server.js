// Imports
import express from 'express';
import dotenv from 'dotenv/config';
import path from 'path';

const PORT = process.env.PORT;

const app = express();

// Importing and declaring path to dirname and filename because it's not "accepted" in the ES Modules
const __dirname = import.meta.dirname;

// Setting EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.status(200).render('index');
});

// Listener
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`)
});