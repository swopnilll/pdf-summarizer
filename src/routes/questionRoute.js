import express from 'express';

import { getAnswer } from '../services/qaService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {

      const { question } = req.body;

      const answer = await getAnswer(question);

      res.json({ answer });

    } catch (error) {

      console.error('Error fetching answer:', error);
      
      res.status(500).json({ error: 'Something went wrong' });

    }
  });
  
  export default router;