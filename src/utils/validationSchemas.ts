import { z } from 'zod';

export const weatherQuerySchema = z.object({
    query: z.object({
      city: z.string(),
    })
  });

export const weatherCoordsQuerySchema = z.object({
    query: z.object({
        lat: z.string(),
        lon: z.string(),
      })
  });
