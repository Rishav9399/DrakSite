import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100)
    // Optional: Add regex for more complex passwords if strict security is needed
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    //   message: "Password must contain at least one uppercase, lowercase, number, and special character.",
    // }),
});

export type LoginInput = z.infer<typeof loginSchema>;
