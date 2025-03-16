import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './db';
import friendRouter from './src/routes/friendRoutes';
import chatRouter from './src/routes/chatRoutes';
import messageRouter from './src/routes/messageRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Connect PostgreSQL
// pool.connect()
//     .then(() => {
//         console.log('✅ Connected to PostgreSQL');

//         app.listen(PORT, () => {
//             console.log(`🚀 Server is running on http://localhost:${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.error('❌ Database connection error:', err);
//         process.exit(1);
//     });

// Routes
app.use('/api/friends', friendRouter);
app.use('/api/chats', chatRouter);
app.use('/api/messages', messageRouter);

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
