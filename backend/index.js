import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
dotenv.config();
// call database
await connectDB();

// Routes
app.get("/",(req,res)=>{
    res.send("Api is working")
});
app.use('/api/admin',adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is Runnung on port ${PORT}`);  
})

export default app;
