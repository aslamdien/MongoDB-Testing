const express = require('express');

const app = express();

// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact Keeper Api...' }))

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
