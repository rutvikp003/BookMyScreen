// src/modules/movie/movie.validation.ts
import { z } from "zod";

export const TheaterSchema = z.object({
  name: z.string().min(1, "Theater name must be at least 2 characters long"),
  location: z.string().min(1, "Location must be at least 5 characters long"),
  logo: z.string().min(1,"Logo must be a valid URL"),
  city: z.string().min(1, "City must be at least 2 characters long"),
  state: z.string().min(1, "State must be at least 2 characters long"),
});

export type TheaterInput = z.infer<typeof TheaterSchema>;
