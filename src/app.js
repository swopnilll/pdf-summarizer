import express from 'express';
import dotenv from 'dotenv';

import questionRoute from './routes/questionRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.use('/api/questions', questionRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });