import express from 'express';
const dotenv = require("dotenv");
const cors = require('cors');
import weatherRoutes from './src/routes/weatherRoutes';
import connectDB from './src/config/database';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();  // Établir la connexion à la base de données
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
