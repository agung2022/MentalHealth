const express = require('express');
const sequelize = require('./config/database');
const { Article } = require('./models');

const app = express();
app.use(express.json());

// Test route
app.get('/test', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.json({ message: 'Database connected!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const start = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced');
        
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    } catch (error) {
        console.error(error);
    }
};

start();