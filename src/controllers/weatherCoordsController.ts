import { Request, Response } from 'express';
import { getWeatherDataByCoords } from '../services/weatherCoordsService';

export const getWeatherByCoords = async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lon } = req.query as { lat: string; lon: string };
    const forecast = await getWeatherDataByCoords(parseFloat(lat), parseFloat(lon));
    res.status(200).json(forecast);
  } catch (error: any) {
    const status = error.status || 500;
    res.status(status).json({ message: error.message });
  }
};