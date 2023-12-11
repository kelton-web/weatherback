import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Weather from '../src/models/Weather';

describe('Weather Model Test', () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create & save a weather record successfully', async () => {
    const validWeather = new Weather({
      city: 'Paris',
      forecast: { temp: 21, description: 'Sunny' },
      createdAt: new Date()
    });

    const savedWeather = await validWeather.save();

    // Assertions
    expect(savedWeather._id).toBeDefined();
    expect(savedWeather.city).toBe('Paris');
    expect(savedWeather.forecast.temp).toBe(21);
    expect(savedWeather.forecast.description).toBe('Sunny');
  });
});
