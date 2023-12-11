import { Request, Response } from 'express';
import { getWeatherData } from '../services/weatherService';

export const getWeatherForecast = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;
    
    const forecast = await getWeatherData(city as string);  
    res.status(200).json(forecast);
  } catch (error: any) {
    const status = error.status || 500;
    res.status(status).json({ message: error.message });
  }
};
