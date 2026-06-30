import { z } from "zod";

export const watchlistItemSchema = z.object({
  movieId: z.string().uuid(),
  rating: z.coerce
    .number()
    .min(0, "Rating must be a number between 0 and 10")
    .max(10, "Rating must be a number between 0 and 10")
    .optional(),
  notes: z.string().max(500, "Notes must be at most 500 characters").optional(),
  status: z
    .enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"], {
      error: () => ({
        message: "status must be one of: PLANNED, WATCHING, COMPLETED, DROPPED",
      }),
    })
    .optional(),
});
