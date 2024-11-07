const express = require('express');
const app = express();
const quizRoutes = require('./routes/quizRoutes');

// Parse JSON request bodies
app.use(express.json());

// Quiz routes
app.use('/api/quiz', quizRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

