import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  fullName: z.string().min(1, 'Full Name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
export type RegisterFormInputs = z.infer<typeof registerSchema>;
