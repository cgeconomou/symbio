// app.js
const express = require('express');
const path = require('path');
const networkRoutes = require('./routes/networkRoutes');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', networkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
