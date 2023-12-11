import express from 'express';
import { getWeatherForecast } from '../controllers/weatherController';
import { getWeatherByCoords } from '../controllers/weatherCoordsController';
import validate from '../middlewares/validateRequest';
import { weatherCoordsQuerySchema, weatherQuerySchema } from '../utils/validationSchemas';

const router = express.Router();

router.get('/forecast', validate(weatherQuerySchema), getWeatherForecast);

router.get('/forecastByCoords', validate(weatherCoordsQuerySchema), getWeatherByCoords);

export default router;
