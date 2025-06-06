import express from 'express';
import "dotenv/config";
import userRoutes from './routes/users.router';
import artistRoutes from './routes/artist.router';
import festivalRoutes from './routes/festival.router';
import stagesRoutes from './routes/stages.router';
import ticketsRoutes from './routes/tickets.router';
import lineupRoutes from './routes/user_lineup.router';
import performanceRoutes from './routes/performance.router';
import { errorHandler } from './helpers/httpError';

const app = express()
const cors = require('cors');
const port = process.env.PORT;

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/users', userRoutes)
app.use('/api/artists', artistRoutes)
app.use('/api/festivals', festivalRoutes)
app.use('/api/stages', stagesRoutes)
app.use('/api/tickets', ticketsRoutes)
app.use('/api/userlineups', lineupRoutes)
app.use('/api/performance', performanceRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`)
})