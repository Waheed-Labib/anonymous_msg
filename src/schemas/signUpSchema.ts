import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must have atleast 2 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character")

export const signUpValidation = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid Email Address" }),
    password: z.string().min(6, { message: "Password must have atleast 6 characters" })
})