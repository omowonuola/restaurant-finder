import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConnection';

// Load env vars
dotenv.config({ path: './config/.env' });


const app = express();

// connect to database
connectDB();


// Dev logging middleware
if(process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

// Enabling CORS
app.use(cors({ credentials: true }));

// app.use(morgan('tiny'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.DB_PORT || 4000;


app.listen( 4000,  
    console.log('Server running')
    // console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//     console.log(`Error: ${err.message}`.red);
//     // Close server & exit process
//     server.close(() => process.exit(1));
// });