import express from 'express';
import dotenv from 'dotenv';

import questionRoute from './routes/questionRoute.js';

import {loadDocument} from './utils/pdfParser.js'

dotenv.config();

const app = express();

const initializeApp = async () => {
  try {
      const docs = await loadDocument();  // Load PDF during app initialization
      console.log('PDF loaded during initialization:', docs);
  } catch (error) {
      console.error('Error loading PDF during initialization:', error);
  }
};

initializeApp();  // Call the initialization function

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.use('/api/questions', questionRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });