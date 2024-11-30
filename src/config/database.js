const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'mental_health_db',
    username: 'root',        // sesuaikan dengan username Cloud SQL
    password: 'your_password', // sesuaikan dengan password Cloud SQL
    host: 'YOUR_CLOUD_SQL_IP_ADDRESS', // ganti dengan IP public Cloud SQL
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        // Untuk koneksi SSL (opsional)
        ssl: {
            rejectUnauthorized: false
        }
    },
    logging: console.log // untuk melihat query SQL
});

module.exports = sequelize;