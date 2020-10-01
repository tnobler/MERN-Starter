const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/api/v1/auth', require('./routes/api/v1/auth'));
app.use('/api/v1/profile', require('./routes/api/v1/profile'));
app.use('/api/v1/properties', require('./routes/api/v1/properties'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
