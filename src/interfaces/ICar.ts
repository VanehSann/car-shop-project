import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().positive().int().gte(2)
    .lte(4),
  seatsQty: z.number().positive().int().gte(2)
    .lte(7),
});

export type ICar = z.infer<typeof carZodSchema>;