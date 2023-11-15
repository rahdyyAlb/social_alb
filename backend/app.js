const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes/Routes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const mongoConnection = process.env.DBConnection;
app.use(cors());

if (!mongoConnection) {
    console.error('MongoConnection is not defined in the .env file');
    process.exit(1);
}

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Connexion à la base de données MongoDB
mongoose.connect(mongoConnection, {})
    .then(() => {
        console.log(`Connected to MongoDB ${mongoConnection}`);
        // Lancer le serveur après la connexion à la base de données
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
