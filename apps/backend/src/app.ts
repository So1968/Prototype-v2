import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { errorHandler } from './middleware/error-handler.js';
import { apiRouter } from './routes/index.js';

export const app = express();

app.use(
  cors({
    origin: env.corsOrigin
  })
);
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    name: 'prototype-v2-backend',
    version: '0.1.0'
  });
});

app.use('/api', apiRouter);
app.use(errorHandler);
