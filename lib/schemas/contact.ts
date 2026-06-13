import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().pipe(z.email()),
  message: z.string().trim().min(1),
});
