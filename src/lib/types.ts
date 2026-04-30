import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export type FormData = z.infer<typeof formSchema>;

// Quote form data type
export const quoteFormSchema = z.object({
  propertyType: z.string().min(1, "Please select a property type"),
  roofType: z.string().min(1, "Please select a roof type"),
  billRange: z.string().min(1, "Please select your bill range"),
  systemInterest: z.string().min(1, "Please select what you're interested in"),
  timeframe: z.string().min(1, "Please select a timeframe"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  postcode: z.string().min(4, "Please enter a valid postcode"),
  state: z.string().min(1, "Please select a state"),
  message: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;