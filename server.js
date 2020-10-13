const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/api/v1/auth', require('./routes/api/v1/auth'));
app.use('/api/v1/profile', require('./routes/api/v1/profile'));
<<<<<<< HEAD
app.use('/api/v1/properties', require('./routes/api/v1/properties'));
// app.use('/api/v1/budgets', require('./routes/api/v1/budgets'));
=======
>>>>>>> 41bd6a1b2e21d0d1af80a3c93435d8d4243818a1

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
